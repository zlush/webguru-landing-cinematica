import { useState, useMemo } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, ReferenceLine,
} from 'recharts'
import {
  Users, DollarSign, Percent, ShoppingCart,
  Clock, Activity, ArrowLeft, Building2,
  Target, RotateCcw, ChevronDown, ChevronUp,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const fmt = (v) =>
  new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(v)
const fmtN = (v) => new Intl.NumberFormat('es-ES').format(Math.round(v))

// ── Sub-components ─────────────────────────────────────────────────────────

function SectionLabel({ icon, label, color = 'text-purple-400' }) {
  return (
    <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4 ${color}`}>
      {icon}
      {label}
    </div>
  )
}

function SteppedSlider({ label, value, min = 0, max = 10, step = 0.5, onChange, format }) {
  const steps = []
  for (let v = min; v <= max; v = Math.round((v + step) * 10) / 10) steps.push(v)
  const pct = ((value - min) / (max - min)) * 100

  return (
    <div className="space-y-3">
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
          style={{
            background: `linear-gradient(to right, #7B61FF ${pct}%, #374151 ${pct}%)`,
          }}
        />
        {/* Tick marks */}
        <div className="flex justify-between mt-1 px-0.5">
          {steps.filter((_, i) => i % 2 === 0).map((v) => (
            <div key={v} className="flex flex-col items-center">
              <div className="w-px h-1.5 bg-white/20" />
              <span className="text-[9px] text-gray-600 mt-0.5">{format ? format(v) : v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function NumberInput({ label, value, onChange, prefix = '$', min = 0 }) {
  const [raw, setRaw] = useState(String(value))

  const commit = () => {
    const n = Number(raw.replace(/[^0-9.-]/g, ''))
    if (!isNaN(n) && n >= min) { onChange(n); setRaw(String(n)) }
    else { setRaw(String(value)) }
  }

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-300 block">{label}</label>
      <div className="flex items-center bg-[#0f0f1a] border border-white/10 rounded-xl overflow-hidden
                      focus-within:border-purple-500/50 transition-colors">
        <span className="pl-3 pr-2 text-gray-500 text-sm select-none">{prefix}</span>
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
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10
                     flex items-center justify-center text-lg font-light transition-colors"
        >−</button>
        <span className="w-16 text-center text-sm font-bold text-white tabular-nums">
          {value}{suffix}
        </span>
        <button
          onClick={() => onChange(Math.min(max, value + 1))}
          className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10
                     flex items-center justify-center text-lg font-light transition-colors"
        >+</button>
      </div>
    </div>
  )
}

function LeadSlider({ value, onChange }) {
  const pct = ((Math.log(value) - Math.log(100)) / (Math.log(500000) - Math.log(100))) * 100
  const steps = [100, 500, 1000, 5000, 10000, 50000, 100000, 500000]

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-gray-300">Leads (Alcance)</label>
        <span className="text-sm font-bold text-white bg-white/10 px-3 py-1 rounded-lg tabular-nums">
          {fmtN(value)}
        </span>
      </div>
      <input
        type="range" min={100} max={500000} step={100} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-purple-500"
        style={{
          background: `linear-gradient(to right, #7B61FF ${pct}%, #374151 ${pct}%)`,
        }}
      />
    </div>
  )
}

function MetricCard({ title, value, subtitle, highlight = false, dim = false }) {
  return (
    <div className={`p-4 rounded-2xl border transition-all ${
      highlight ? 'bg-purple-900/20 border-purple-500/50' :
      dim ? 'bg-[#0f0f1a] border-white/5' :
      'bg-[#141414] border-white/10'
    }`}>
      <p className={`text-xs mb-1 ${dim ? 'text-gray-600' : 'text-gray-400'}`}>{title}</p>
      <p className={`text-xl font-bold tracking-tight mb-0.5 ${
        highlight ? 'text-purple-400' : dim ? 'text-gray-500' : 'text-white'
      }`}>{value}</p>
      {subtitle && <p className="text-xs text-gray-600">{subtitle}</p>}
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

  // Empresa (sección aparte)
  const [avgPrice, setAvgPrice] = useState(150)
  const [avgCost, setAvgCost] = useState(60)
  const [fixedCosts, setFixedCosts] = useState(50000)
  const [empresaOpen, setEmpresaOpen] = useState(false)

  // ── Calculations ──
  const customers = Math.round(leads * (conversionRate / 100))
  const ltvRevenue = avgPrice * purchasesPerYear * lifespanYears
  const ltvCost = avgCost * purchasesPerYear * lifespanYears
  const ltvMargin = ltvRevenue - ltvCost

  const totalRevenue = customers * ltvRevenue
  const grossMargin = customers * ltvMargin
  const netMargin = grossMargin - fixedCosts
  const fixedCostsPct = totalRevenue > 0 ? (fixedCosts / totalRevenue) * 100 : 0

  // ── Sensitivity: margen bruto vs neto a distintas tasas de conversión ──
  const sensitivityData = useMemo(() => {
    const data = []
    for (let cr = 0; cr <= 10; cr = Math.round((cr + 0.5) * 10) / 10) {
      const c = leads * (cr / 100)
      const gross = c * ltvMargin
      const net = gross - fixedCosts
      data.push({ rate: cr, gross, net })
    }
    return data
  }, [leads, ltvMargin, fixedCosts])

  // ── Breakeven conversion rate ──
  const breakevenRate = ltvMargin > 0
    ? ((fixedCosts / (leads * ltvMargin)) * 100)
    : null

  return (
    <div className="min-h-screen bg-[#0A0A14] text-white font-sans selection:bg-purple-500/30">
      {/* Top bar */}
      <div className="border-b border-white/5 px-6 py-4 flex items-center gap-4">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          Volver
        </Link>
        <div className="w-px h-4 bg-white/10" />
        <div className="flex items-center gap-2 text-purple-400">
          <Activity className="w-4 h-4" />
          <span className="text-sm font-semibold text-white">Análisis de Sensibilidad KPI</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 md:p-8">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

          {/* ── LEFT: Controls ── */}
          <div className="xl:col-span-4 space-y-4">

            {/* Alcance */}
            <div className="bg-[#141420] border border-white/8 rounded-2xl p-5">
              <SectionLabel icon={<Users className="w-3.5 h-3.5" />} label="Alcance" />
              <LeadSlider value={leads} onChange={setLeads} />
            </div>

            {/* Conversión */}
            <div className="bg-[#141420] border border-white/8 rounded-2xl p-5">
              <SectionLabel
                icon={<Target className="w-3.5 h-3.5" />}
                label="Conversión"
                color="text-blue-400"
              />
              <SteppedSlider
                label="Tasa de Conversión"
                value={conversionRate}
                min={0} max={10} step={0.5}
                onChange={setConversionRate}
                format={(v) => `${v}%`}
              />
              {breakevenRate !== null && (
                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="text-gray-500">Punto de equilibrio</span>
                  <span className={`font-bold tabular-nums ${
                    conversionRate >= breakevenRate ? 'text-emerald-400' : 'text-amber-400'
                  }`}>
                    {breakevenRate.toFixed(1)}%
                    {conversionRate >= breakevenRate ? ' ✓' : ' ↑ necesitas más'}
                  </span>
                </div>
              )}
            </div>

            {/* Retención */}
            <div className="bg-[#141420] border border-white/8 rounded-2xl p-5 space-y-4">
              <SectionLabel
                icon={<RotateCcw className="w-3.5 h-3.5" />}
                label="Retención"
                color="text-emerald-400"
              />
              <StepperInput
                label="Compras por año"
                value={purchasesPerYear}
                onChange={setPurchasesPerYear}
                min={1} max={52}
              />
              <div className="h-px bg-white/5" />
              <StepperInput
                label="Años de relación"
                value={lifespanYears}
                onChange={setLifespanYears}
                min={1} max={30}
                suffix=" años"
              />
            </div>

            {/* Empresa (colapsable) */}
            <div className="bg-[#0f0f1a] border border-white/5 rounded-2xl overflow-hidden">
              <button
                onClick={() => setEmpresaOpen(!empresaOpen)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/2 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                  <Building2 className="w-3.5 h-3.5" />
                  Datos de la empresa
                </div>
                {empresaOpen
                  ? <ChevronUp className="w-4 h-4 text-gray-600" />
                  : <ChevronDown className="w-4 h-4 text-gray-600" />}
              </button>

              {empresaOpen && (
                <div className="px-5 pb-5 space-y-4 border-t border-white/5">
                  <p className="text-xs text-gray-600 pt-4">
                    Estos valores definen tu estructura de ingresos y costos.
                    Modifícalos según el modelo de tu negocio.
                  </p>
                  <NumberInput
                    label="Tarifa media por compra"
                    value={avgPrice}
                    onChange={setAvgPrice}
                    prefix="US$"
                    min={1}
                  />
                  <NumberInput
                    label="Costo variable por compra"
                    value={avgCost}
                    onChange={setAvgCost}
                    prefix="US$"
                    min={0}
                  />
                  <div className="h-px bg-white/5" />
                  <NumberInput
                    label="Costos fijos anuales"
                    value={fixedCosts}
                    onChange={setFixedCosts}
                    prefix="US$"
                    min={0}
                  />
                </div>
              )}
            </div>
          </div>

          {/* ── RIGHT: Dashboard ── */}
          <div className="xl:col-span-8 space-y-6">

            {/* KPI cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <MetricCard title="Nuevos Clientes" value={fmtN(customers)} subtitle="Leads × Conversión" />
              <MetricCard title="LTV por Cliente" value={fmt(ltvMargin)} subtitle="Margen de vida" highlight />
              <MetricCard title="Ingresos Totales" value={fmt(totalRevenue)} subtitle="Proyectado" />
              <MetricCard title="Margen Bruto" value={fmt(grossMargin)} subtitle="Antes de fijos" />
            </div>

            {/* Impact block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Net margin */}
              <div className="bg-gradient-to-br from-purple-900/40 to-black border border-purple-500/30
                              rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-40 h-40 bg-purple-600/20 blur-[60px] rounded-full pointer-events-none" />
                <p className="text-xs text-purple-300/70 uppercase tracking-widest font-bold mb-2">
                  Margen Neto Total
                </p>
                <p className={`text-4xl font-bold tracking-tight ${netMargin >= 0 ? 'text-white' : 'text-red-400'}`}>
                  {fmt(netMargin)}
                </p>
                <p className="text-xs text-gray-500 mt-1">Después de costos fijos</p>
              </div>

              {/* Cost breakdown */}
              <div className="bg-[#141420] border border-white/8 rounded-2xl p-6 space-y-3">
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Estructura de Margen</p>
                <div className="space-y-2">
                  <BarRow label="Ingresos" value={totalRevenue} max={totalRevenue} color="bg-blue-500/60" fmt={fmt} />
                  <BarRow label="Costos variables" value={customers * ltvCost} max={totalRevenue} color="bg-red-500/40" fmt={fmt} negative />
                  <BarRow label="Margen bruto" value={grossMargin} max={totalRevenue} color="bg-purple-500/60" fmt={fmt} />
                  <BarRow label="Costos fijos" value={fixedCosts} max={totalRevenue} color="bg-amber-500/40" fmt={fmt} negative />
                  <div className="h-px bg-white/10" />
                  <BarRow label="Margen neto" value={netMargin} max={totalRevenue}
                    color={netMargin >= 0 ? 'bg-emerald-500/60' : 'bg-red-500/60'} fmt={fmt} bold />
                </div>
                <p className="text-xs text-gray-600">
                  Costos fijos = {fixedCostsPct.toFixed(1)}% de los ingresos
                </p>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-[#141420] border border-white/8 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-sm font-semibold text-white">Sensibilidad: Margen vs Tasa de Conversión</h3>
              </div>
              <p className="text-xs text-gray-500 mb-5">
                Impacto de los costos fijos en el margen neto según la conversión
              </p>
              <div className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={sensitivityData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e1e2e" vertical={false} />
                    <XAxis dataKey="rate" stroke="#333" tickFormatter={(v) => `${v}%`}
                      tick={{ fill: '#555', fontSize: 11 }} />
                    <YAxis stroke="#333" tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                      tick={{ fill: '#555', fontSize: 11 }} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1a1a2e', borderColor: '#333', borderRadius: '10px', color: '#fff', fontSize: '12px' }}
                      formatter={(v, name) => [fmt(v), name === 'gross' ? 'Margen Bruto' : 'Margen Neto']}
                      labelFormatter={(l) => `Conversión: ${l}%`}
                    />
                    {/* Breakeven line */}
                    {breakevenRate !== null && breakevenRate <= 10 && (
                      <ReferenceLine x={breakevenRate} stroke="#f59e0b" strokeDasharray="4 3"
                        label={{ position: 'top', value: 'BEP', fill: '#f59e0b', fontSize: 10 }} />
                    )}
                    {/* Current conversion */}
                    <ReferenceLine x={conversionRate} stroke="#7B61FF" strokeDasharray="3 3"
                      label={{ position: 'top', value: 'Actual', fill: '#7B61FF', fontSize: 10 }} />
                    {/* Zero line */}
                    <ReferenceLine y={0} stroke="#ef4444" strokeWidth={1} strokeDasharray="2 4" />
                    <Line type="monotone" dataKey="gross" stroke="#60a5fa" strokeWidth={2}
                      dot={false} activeDot={{ r: 5, fill: '#60a5fa' }} />
                    <Line type="monotone" dataKey="net" stroke="#a855f7" strokeWidth={2.5}
                      dot={false} activeDot={{ r: 5, fill: '#a855f7', stroke: '#fff', strokeWidth: 2 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center gap-6 mt-3">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <div className="w-5 h-0.5 bg-blue-400" /> Margen Bruto
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <div className="w-5 h-0.5 bg-purple-500" /> Margen Neto
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <div className="w-5 h-0.5 bg-amber-400" style={{ borderTop: '2px dashed' }} /> Punto equilibrio
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

function BarRow({ label, value, max, color, fmt, negative = false, bold = false }) {
  const pct = max > 0 ? Math.min(100, Math.abs(value) / Math.abs(max) * 100) : 0
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className={`text-xs ${bold ? 'text-white font-semibold' : 'text-gray-400'}`}>
          {negative ? '−' : ''}{label}
        </span>
        <span className={`text-xs font-bold tabular-nums ${
          bold ? (value >= 0 ? 'text-emerald-400' : 'text-red-400') : 'text-gray-300'
        }`}>
          {fmt(Math.abs(value))}
        </span>
      </div>
      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
