import { registerWidget, type WidgetContext } from "@togo-framework/widget";

export function Skills({ settings }: WidgetContext) {
  const skills = (settings.skills as string[]) ?? ["Go", "TypeScript", "React", "Postgres", "AI"];
  return (
    <div className="wx-skills" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {skills.map((s) => (
        <span key={s} style={{ padding: "4px 10px", borderRadius: 20, background: "rgba(127,127,127,.15)", fontSize: 13 }}>{s}</span>
      ))}
    </div>
  );
}
registerWidget({ key: "skills", title: "Top skills", defaultZone: "body", Comp: Skills });
