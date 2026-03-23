import { useState, useMemo } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, ReferenceLine,
} from 'recharts'
import {
  Users, Activity, ArrowLeft, Building2,
  Target, RotateCcw, ChevronDown, ChevronUp,
  TrendingUp, CalendarDays, Infinity as InfinityIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'

// ── Formatters ──────────────────────────────────────────────────────────────
const fmt = (v) =>
  new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(v)
const fmtN = (v) => new Intl.NumberFormat('es-ES').format(Math.round(v))

// ── Sub-components ──────────────────────────────────────────────────────────

function SectionLabel({ icon, label, color = 'text-purple-400' }) {
  return (
    <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest mb-4 ${color}`}>
      {icon}{label}
    </div>
  )
}

function SteppedSlider({ label, value, min = 0, max = 10, step = 0.5, onChange, format }) {
  const pct = ((value - min) / (max - min)) * 100
  const ticks = []
  for (let v = min; v <= max; v = Math.round((v + step * 2) * 10) / 10) ticks.push(v)

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-gray-300">{label}</label>
        <span className="text-sm font-bold text-white bg-white/10 px-3 py-1 rounded-lg tabular-nums">
          {format ? format(value) : value}
        </span>
      </div>
      <div className="relative">
        <input
          type="range" min={min} max={max} step={step} value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-purple-500"
          style={{ background: `linear-gradient(to right,#7B61FF ${pct}%,#374151 ${pct}%)` }}
        />
        <div className="flex justify-between mt-1">
          {ticks.map((v) => (
            <div key={v} className="flex flex-col items-center">
              <div className="w-px h-1 bg-white/15" />
              <span className="text-[9px] text-gray-600">{format ? format(v) : v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function NumberInput({ label, value, onChange, prefix = 'US$', min = 0 }) {
  const [raw, setRaw] = useState(String(value))

  const commit = () => {
    const n = Number(raw.replace(/[^0-9.-]/g, ''))
    if (!isNaN(n) && n >= min) { onChange(n); setRaw(String(n)) }
    else setRaw(String(value))
  }

  return (
    <div className="space-y-1.5">
      <label className="text-xs font-medium text-gray-400 block">{label}</label>
      <div className="flex items-center bg-[#0c0c18] border border-white/8 rounded-xl
                      focus-within:border-purple-500/40 transition-colors">
        <span className="pl-3 pr-2 text-gray-600 text-xs select-none">{prefix}</span>
        <input
          type="number" min={min} value={raw}
          onChange={(e) => setRaw(e.target.value)}
          onBlur={commit}
          onKeyDown={(e) => e.key === 'Enter' && commit()}
          className="flex-1 bg-transparent text-white text-sm font-bold py-2.5 pr-3 outline-none
                     [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none
                     [&::-webkit-inner-spin-button]:appearance-none"
        />
      </div>
    </div>
  )
}

function StepperInput({ label, value, onChange, min = 1, max = 100, suffix = '' }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-sm font-medium text-gray-300">{label}</span>
      <div className="flex items-center gap-1">
        <button onClick={() => onChange(Math.max(min, value - 1))}
          className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 text-white
                     hover:bg-white/10 flex items-center justify-center text-base transition-colors">
          −
        </button>
        <span className="w-16 text-center text-sm font-bold text-white tabular-nums">
          {value}{suffix}
        </span>
        <button onClick={() => onChange(Math.min(max, value + 1))}
          className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 text-white
                     hover:bg-white/10 flex items-center justify-center text-base transition-colors">
          +
        </button>
      </div>
    </div>
  )
}

function LeadSlider({ value, onChange }) {
  const pct = (value / 500000) * 100
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-gray-300">Leads (Alcance)</label>
        <span className="text-sm font-bold text-white bg-white/10 px-3 py-1 rounded-lg tabular-nums">
          {fmtN(value)}
        </span>
      </div>
      <input type="range" min={100} max={500000} step={100} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-purple-500"
        style={{ background: `linear-gradient(to right,#7B61FF ${pct / 5}%,#374151 ${pct / 5}%)` }}
      />
    </div>
  )
}

function KpiCard({ label, value, sub, color = 'text-white', dim = false, border = 'border-white/8' }) {
  return (
    <div className={`rounded-2xl border p-4 ${dim ? 'bg-[#0c0c18]' : 'bg-[#141420]'} ${border}`}>
      <p className={`text-[10px] uppercase tracking-widest font-bold mb-1 ${dim ? 'text-gray-600' : 'text-gray-400'}`}>
        {label}
      </p>
      <p className={`text-xl font-bold tabular-nums ${color}`}>{value}</p>
      {sub && <p className="text-[10px] text-gray-600 mt-0.5">{sub}</p>}
    </div>
  )
}

function BarRow({ label, value, max, color, fmt: f = fmt, negative = false, bold = false }) {
  const pct = max > 0 ? Math.min(100, Math.abs(value) / Math.abs(max) * 100) : 0
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className={`text-xs ${bold ? 'text-white font-semibold' : 'text-gray-500'}`}>
          {negative ? '−\u2009' : ''}{label}
        </span>
        <span className={`text-xs font-bold tabular-nums ${bold
          ? (value >= 0 ? 'text-emerald-400' : 'text-red-400') : 'text-gray-400'}`}>
          {f(Math.abs(value))}
        </span>
      </div>
      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%`, transition: 'width 0.3s' }} />
      </div>
    </div>
  )
}

// ── Main ────────────────────────────────────────────────────────────────────

export default function Calculadora() {
  // Alcance
  const [leads, setLeads] = useState(10000)

  // Conversión
  const [conversionRate, setConversionRate] = useState(2.5)

  // Retención
  const [purchasesPerYear, setPurchasesPerYear] = useState(3)
  const [lifespanYears, setLifespanYears] = useState(5)

  // Empresa
  const [avgPrice, setAvgPrice] = useState(150)
  const [avgCost, setAvgCost] = useState(60)
  const [fixedCosts, setFixedCosts] = useState(300000)
  const [empresaOpen, setEmpresaOpen] = useState(false)

  // ── Calculations ──────────────────────────────────────────────────────────

  // LTV por cliente
  const ltvRevenue   = avgPrice * purchasesPerYear * lifespanYears
  const ltvCost      = avgCost  * purchasesPerYear * lifespanYears
  const ltvMargin    = ltvRevenue - ltvCost
  const marginPct    = ltvRevenue > 0 ? (ltvMargin / ltvRevenue) * 100 : 0

  // Métricas anuales
  const customers        = Math.round(leads * (conversionRate / 100))
  const annualRevenue    = customers * avgPrice * purchasesPerYear
  const annualVarCost    = customers * avgCost  * purchasesPerYear
  const annualGrossMargin = annualRevenue - annualVarCost
  const annualNetMargin  = annualGrossMargin - fixedCosts

  // Proyección total (lifetime del cohorte)
  const totalRevenue     = customers * ltvRevenue
  const totalGrossMargin = customers * ltvMargin
  const totalNetMargin   = totalGrossMargin - fixedCosts * lifespanYears

  // Breakeven
  const breakevenRate = ltvMargin > 0
    ? (fixedCosts / ((leads / 100) * ltvMargin / purchasesPerYear))
    : null

  // Chart data
  const chartData = useMemo(() => {
    const data = []
    for (let cr = 0; cr <= 10; cr = Math.round((cr + 0.5) * 10) / 10) {
      const c = leads * (cr / 100)
      const gross = c * (avgPrice - avgCost) * purchasesPerYear
      const net   = gross - fixedCosts
      data.push({ rate: cr, gross, net })
    }
    return data
  }, [leads, avgPrice, avgCost, purchasesPerYear, fixedCosts])

  const annualBEP = ltvMargin > 0 && leads > 0
    ? (fixedCosts / ((avgPrice - avgCost) * purchasesPerYear * leads)) * 100
    : null

  return (
    <div className="min-h-screen bg-[#0A0A14] text-white font-sans selection:bg-purple-500/30">

      {/* ── Top bar ── */}
      <div className="border-b border-white/5 px-6 py-4 flex items-center gap-4">
        <img src="/webguru-logo-dark.png" alt="WebGuru" className="h-7 w-auto" />
        <div className="w-px h-5 bg-white/10" />
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-semibold text-white">Análisis de Sensibilidad KPI</span>
        </div>
        <Link to="/"
          className="ml-auto inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors">
          <ArrowLeft className="w-3 h-3" />
          Volver al sitio
        </Link>
      </div>

      <div className="max-w-7xl mx-auto p-5 md:p-8">

        {/* ── Hero title ── */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-1">
            Calculadora de Rentabilidad
          </h1>
          <p className="text-sm text-gray-500 max-w-xl">
            Modela el impacto de alcance, conversión y retención en el LTV y el margen neto de tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

          {/* ── LEFT: Controls ── */}
          <div className="xl:col-span-4 space-y-4">

            {/* Alcance */}
            <div className="bg-[#141420] border border-white/8 rounded-2xl p-5">
              <SectionLabel icon={<Users className="w-3 h-3" />} label="Alcance" />
              <LeadSlider value={leads} onChange={setLeads} />
            </div>

            {/* Conversión */}
            <div className="bg-[#141420] border border-white/8 rounded-2xl p-5">
              <SectionLabel icon={<Target className="w-3 h-3" />} label="Conversión" color="text-blue-400" />
              <SteppedSlider
                label="Tasa de Conversión"
                value={conversionRate} min={0} max={10} step={0.5}
                onChange={setConversionRate}
                format={(v) => `${v}%`}
              />
              {annualBEP !== null && (
                <div className="mt-4 p-3 rounded-xl bg-white/3 border border-white/5 flex items-center justify-between">
                  <span className="text-xs text-gray-500">Punto de equilibrio anual</span>
                  <span className={`text-xs font-bold tabular-nums ${
                    conversionRate >= annualBEP ? 'text-emerald-400' : 'text-amber-400'
                  }`}>
                    {annualBEP.toFixed(2)}%
                    {conversionRate >= annualBEP ? ' ✓' : ' ↑'}
                  </span>
                </div>
              )}
            </div>

            {/* Retención */}
            <div className="bg-[#141420] border border-white/8 rounded-2xl p-5 space-y-4">
              <SectionLabel icon={<RotateCcw className="w-3 h-3" />} label="Retención" color="text-emerald-400" />
              <StepperInput label="Compras por año" value={purchasesPerYear}
                onChange={setPurchasesPerYear} min={1} max={52} />
              <div className="h-px bg-white/5" />
              <StepperInput label="Años de relación" value={lifespanYears}
                onChange={setLifespanYears} min={1} max={30} suffix=" años" />
            </div>

            {/* Empresa */}
            <div className="bg-[#0f0f1a] border border-white/5 rounded-2xl overflow-hidden">
              <button onClick={() => setEmpresaOpen(!empresaOpen)}
                className="w-full flex items-center justify-between p-5 hover:bg-white/2 transition-colors">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  <Building2 className="w-3 h-3" />
                  Datos de la empresa
                </div>
                {empresaOpen
                  ? <ChevronUp className="w-3.5 h-3.5 text-gray-600" />
                  : <ChevronDown className="w-3.5 h-3.5 text-gray-600" />}
              </button>

              {empresaOpen && (
                <div className="px-5 pb-5 space-y-4 border-t border-white/5">
                  <p className="text-xs text-gray-600 pt-4 leading-relaxed">
                    Define la estructura de ingresos y costos de tu modelo de negocio.
                  </p>
                  <NumberInput label="Tarifa media por compra" value={avgPrice}
                    onChange={setAvgPrice} min={1} />
                  <NumberInput label="Costo variable por compra" value={avgCost}
                    onChange={setAvgCost} min={0} />
                  <div className="h-px bg-white/5" />
                  <NumberInput label="Costos fijos anuales" value={fixedCosts}
                    onChange={setFixedCosts} min={0} />
                </div>
              )}
            </div>
          </div>

          {/* ── RIGHT: Dashboard ── */}
          <div className="xl:col-span-8 space-y-5">

            {/* ── LTV block (hero) ── */}
            <div className="bg-gradient-to-br from-[#1a1030] to-[#0d0d1a] border border-purple-500/25
                            rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-56 h-56 bg-purple-600/15 blur-[80px] rounded-full pointer-events-none" />
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-purple-400 mb-4">
                <InfinityIcon className="w-3.5 h-3.5" />
                Lifetime Value por Cliente
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">LTV Ingresos</p>
                  <p className="text-2xl font-bold text-white tabular-nums">{fmt(ltvRevenue)}</p>
                  <p className="text-[10px] text-gray-600 mt-0.5">
                    {purchasesPerYear} compras × {lifespanYears} años
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">LTV Costo</p>
                  <p className="text-2xl font-bold text-gray-400 tabular-nums">{fmt(ltvCost)}</p>
                  <p className="text-[10px] text-gray-600 mt-0.5">Costo variable total</p>
                </div>
                <div>
                  <p className="text-xs text-purple-300/70 mb-1">LTV Margen</p>
                  <p className="text-2xl font-bold text-purple-300 tabular-nums">{fmt(ltvMargin)}</p>
                  <p className="text-[10px] text-purple-400/50 mt-0.5">{marginPct.toFixed(0)}% margen</p>
                </div>
              </div>
            </div>

            {/* ── Métricas anuales ── */}
            <div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">
                <CalendarDays className="w-3 h-3" />
                Métricas Anuales
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <KpiCard label="Clientes / Año" value={fmtN(customers)} sub="Leads × Conversión" />
                <KpiCard label="Revenue Anual" value={fmt(annualRevenue)} sub="Ingresos brutos" />
                <KpiCard label="Margen Bruto" value={fmt(annualGrossMargin)}
                  sub={annualRevenue > 0 ? `${((annualGrossMargin/annualRevenue)*100).toFixed(0)}% del revenue` : '—'} />
                <KpiCard
                  label="Margen Neto Anual"
                  value={fmt(annualNetMargin)}
                  sub="Después de fijos"
                  color={annualNetMargin >= 0 ? 'text-emerald-400' : 'text-red-400'}
                  border={annualNetMargin >= 0 ? 'border-emerald-500/20' : 'border-red-500/20'}
                />
              </div>
            </div>

            {/* ── Desglose anual + Proyección total ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Waterfall anual */}
              <div className="bg-[#141420] border border-white/8 rounded-2xl p-5 space-y-3">
                <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-4">
                  Desglose Anual
                </p>
                <BarRow label="Revenue" value={annualRevenue} max={annualRevenue} color="bg-blue-500/50" />
                <BarRow label="Costo variable" value={annualVarCost} max={annualRevenue} color="bg-red-500/35" negative />
                <BarRow label="Margen bruto" value={annualGrossMargin} max={annualRevenue} color="bg-purple-500/50" />
                <BarRow label="Costos fijos" value={fixedCosts} max={annualRevenue} color="bg-amber-500/35" negative />
                <div className="h-px bg-white/8" />
                <BarRow label="Margen neto" value={annualNetMargin} max={annualRevenue}
                  color={annualNetMargin >= 0 ? 'bg-emerald-500/60' : 'bg-red-500/60'} bold />
              </div>

              {/* Proyección lifetime */}
              <div className="bg-gradient-to-br from-[#0f1a0f] to-[#0d0d1a] border border-emerald-500/15
                              rounded-2xl p-5 relative overflow-hidden">
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-emerald-600/10 blur-[50px] rounded-full pointer-events-none" />
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-emerald-400/70 mb-5">
                  <TrendingUp className="w-3 h-3" />
                  Proyección Total ({lifespanYears} años)
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Revenue total del cohorte</p>
                    <p className="text-2xl font-bold text-white tabular-nums">{fmt(totalRevenue)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Margen bruto acumulado</p>
                    <p className="text-xl font-bold text-gray-200 tabular-nums">{fmt(totalGrossMargin)}</p>
                  </div>
                  <div className="h-px bg-white/8" />
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Margen neto acumulado</p>
                    <p className={`text-2xl font-bold tabular-nums ${totalNetMargin >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                      {fmt(totalNetMargin)}
                    </p>
                    <p className="text-[10px] text-gray-600 mt-0.5">
                      Incluye {fmt(fixedCosts * lifespanYears)} en costos fijos
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Chart ── */}
            <div className="bg-[#141420] border border-white/8 rounded-2xl p-5">
              <p className="text-sm font-semibold text-white mb-0.5">
                Sensibilidad: Margen Anual vs Tasa de Conversión
              </p>
              <p className="text-xs text-gray-500 mb-5">
                Efecto de apalancar los costos fijos al crecer el revenue
              </p>
              <div className="h-[240px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1a1a2e" vertical={false} />
                    <XAxis dataKey="rate" stroke="#222" tickFormatter={(v) => `${v}%`}
                      tick={{ fill: '#555', fontSize: 10 }} />
                    <YAxis stroke="#222" tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                      tick={{ fill: '#555', fontSize: 10 }} />
                    <Tooltip
                      contentStyle={{ background: '#1a1a2e', borderColor: '#333', borderRadius: '10px', fontSize: '12px' }}
                      formatter={(v, n) => [fmt(v), n === 'gross' ? 'Margen Bruto' : 'Margen Neto']}
                      labelFormatter={(l) => `Conversión: ${l}%`}
                    />
                    {annualBEP !== null && annualBEP <= 10 && (
                      <ReferenceLine x={annualBEP} stroke="#f59e0b" strokeDasharray="4 3"
                        label={{ position: 'insideTopRight', value: `BEP ${annualBEP.toFixed(1)}%`, fill: '#f59e0b', fontSize: 9 }} />
                    )}
                    <ReferenceLine x={conversionRate} stroke="#7B61FF" strokeDasharray="3 3"
                      label={{ position: 'insideTopLeft', value: 'Actual', fill: '#7B61FF', fontSize: 9 }} />
                    <ReferenceLine y={0} stroke="#ef4444" strokeWidth={1} strokeOpacity={0.4} />
                    <Line type="monotone" dataKey="gross" stroke="#60a5fa" strokeWidth={2}
                      dot={false} activeDot={{ r: 4, fill: '#60a5fa' }} />
                    <Line type="monotone" dataKey="net" stroke="#a855f7" strokeWidth={2.5}
                      dot={false} activeDot={{ r: 4, fill: '#a855f7', stroke: '#fff', strokeWidth: 2 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center gap-5 mt-2">
                <Legend color="bg-blue-400" label="Margen Bruto" />
                <Legend color="bg-purple-500" label="Margen Neto" />
                <Legend color="bg-amber-400" label="Punto equilibrio" dashed />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

function Legend({ color, label, dashed = false }) {
  return (
    <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
      <div className={`w-5 h-0.5 rounded-full ${color} ${dashed ? 'opacity-70' : ''}`}
        style={dashed ? { background: 'none', borderTop: `2px dashed`, borderColor: 'inherit' } : {}} />
      {label}
    </div>
  )
}
