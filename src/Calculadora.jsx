import { useState, useMemo } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, ReferenceLine,
} from 'recharts'
import { Users, DollarSign, Percent, ShoppingCart, Clock, TrendingUp, Activity, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Calculadora() {
  const [leads, setLeads] = useState(10000)
  const [conversionRate, setConversionRate] = useState(2.5)
  const [avgPrice, setAvgPrice] = useState(150)
  const [avgCost, setAvgCost] = useState(60)
  const [purchasesPerYear, setPurchasesPerYear] = useState(3)
  const [lifespanYears, setLifespanYears] = useState(5)

  const customers = Math.round(leads * (conversionRate / 100))
  const ltvRevenue = avgPrice * purchasesPerYear * lifespanYears
  const ltvCost = avgCost * purchasesPerYear * lifespanYears
  const ltvMargin = ltvRevenue - ltvCost
  const totalRevenue = customers * ltvRevenue
  const totalMargin = customers * ltvMargin

  const sensitivityData = useMemo(() => {
    const data = []
    for (let cr = 0.5; cr <= 10; cr += 0.5) {
      data.push({ rate: cr, margin: leads * (cr / 100) * ltvMargin })
    }
    return data
  }, [leads, ltvMargin])

  const fmt = (v) =>
    new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(v)
  const fmtN = (v) => new Intl.NumberFormat('es-ES').format(v)

  return (
    <div className="min-h-screen bg-[#0A0A14] text-white p-4 md:p-8 font-sans selection:bg-purple-500/30">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al sitio
        </Link>

        {/* Header */}
        <header className="space-y-2">
          <div className="flex items-center gap-3 text-purple-400">
            <Activity className="w-8 h-8" />
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Análisis de Sensibilidad KPI
            </h1>
          </div>
          <p className="text-gray-400 max-w-2xl">
            Ajusta los factores clave de tu negocio para visualizar el impacto en el Lifetime Value (LTV)
            y el Margen Final.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Controls */}
          <div className="lg:col-span-4 space-y-6 bg-[#141414] border border-white/10 rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-400" />
              Factores de Negocio
            </h2>

            <ControlSlider label="Leads (Alcance)" icon={<Users className="w-4 h-4" />}
              value={leads} min={100} max={100000} step={100}
              onChange={setLeads} format={fmtN} />

            <ControlSlider label="Tasa de Conversión (%)" icon={<Percent className="w-4 h-4" />}
              value={conversionRate} min={0.1} max={20} step={0.1}
              onChange={setConversionRate} format={(v) => `${v}%`} />

            <div className="h-px bg-white/10" />

            <ControlSlider label="Tarifa Media por Compra" icon={<DollarSign className="w-4 h-4" />}
              value={avgPrice} min={10} max={5000} step={10}
              onChange={setAvgPrice} format={fmt} />

            <ControlSlider label="Costo Medio por Compra" icon={<DollarSign className="w-4 h-4 text-gray-500" />}
              value={avgCost} min={0} max={5000} step={5}
              onChange={setAvgCost} format={fmt} />

            <div className="h-px bg-white/10" />

            <ControlSlider label="Compras por Año" icon={<ShoppingCart className="w-4 h-4" />}
              value={purchasesPerYear} min={1} max={50} step={1}
              onChange={setPurchasesPerYear} />

            <ControlSlider label="Años de Relación (Lifespan)" icon={<Clock className="w-4 h-4" />}
              value={lifespanYears} min={1} max={20} step={1}
              onChange={setLifespanYears} format={(v) => `${v} años`} />
          </div>

          {/* Dashboard */}
          <div className="lg:col-span-8 space-y-8">

            {/* Top metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <MetricCard title="Nuevos Clientes" value={fmtN(customers)} subtitle="Leads × Conversión" />
              <MetricCard title="LTV (Ingresos)" value={fmt(ltvRevenue)} subtitle="Por cliente" />
              <MetricCard title="Costo de Vida" value={fmt(ltvCost)} subtitle="Por cliente" />
              <MetricCard title="Margen LTV" value={fmt(ltvMargin)} subtitle="Por cliente" highlight />
            </div>

            {/* Total impact */}
            <div className="bg-gradient-to-br from-purple-900/40 to-black border border-purple-500/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full pointer-events-none" />
              <h3 className="text-purple-300 font-medium mb-2">Impacto Total Proyectado</h3>
              <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-12">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Margen Final Total</p>
                  <p className="text-5xl font-bold text-white tracking-tight">{fmt(totalMargin)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Ingresos Totales</p>
                  <p className="text-3xl font-semibold text-gray-300">{fmt(totalRevenue)}</p>
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-[#141414] border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-medium mb-6">Sensibilidad: Margen vs Tasa de Conversión</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={sensitivityData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                    <XAxis dataKey="rate" stroke="#666" tickFormatter={(v) => `${v}%`}
                      tick={{ fill: '#888', fontSize: 12 }} />
                    <YAxis stroke="#666" tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                      tick={{ fill: '#888', fontSize: 12 }} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333', borderRadius: '8px', color: '#fff' }}
                      itemStyle={{ color: '#a855f7' }}
                      formatter={(v) => [fmt(v), 'Margen Total']}
                      labelFormatter={(l) => `Conversión: ${l}%`}
                    />
                    <ReferenceLine x={conversionRate} stroke="#a855f7" strokeDasharray="3 3"
                      label={{ position: 'top', value: 'Actual', fill: '#a855f7', fontSize: 12 }} />
                    <Line type="monotone" dataKey="margin" stroke="#a855f7" strokeWidth={3}
                      dot={false} activeDot={{ r: 6, fill: '#a855f7', stroke: '#fff', strokeWidth: 2 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

function ControlSlider({ label, icon, value, min, max, step, onChange, format }) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
          {icon}{label}
        </label>
        <span className="text-sm font-bold text-white bg-white/10 px-2 py-1 rounded-md">
          {format ? format(value) : value}
        </span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-purple-500" />
    </div>
  )
}

function MetricCard({ title, value, subtitle, highlight = false }) {
  return (
    <div className={`p-5 rounded-2xl border ${highlight
      ? 'bg-purple-900/20 border-purple-500/50'
      : 'bg-[#141414] border-white/10'}`}>
      <p className="text-sm text-gray-400 mb-1">{title}</p>
      <p className={`text-2xl font-bold tracking-tight mb-1 ${highlight ? 'text-purple-400' : 'text-white'}`}>
        {value}
      </p>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  )
}
