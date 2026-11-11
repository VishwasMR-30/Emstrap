export default function Field({ label, required, children }) {
  return (
    <label className="block text-sm text-slate-300">
      {label}
      {required && <span className="text-alert"> *</span>}
      <div className="mt-1">{children}</div>
    </label>
  )
}
