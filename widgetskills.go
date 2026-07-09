// Package widgetskills is the "Top skills" DRIVER — Top skills as medal chips ranked by proficiency.
//
// It self-registers into the widget base plugin on import. Install by blank-import:
//
//	import _ "github.com/togo-framework/widget-skills"
package widgetskills

import "github.com/togo-framework/widget"

func init() {
	widget.Register(widget.Descriptor{
		Key:         "skills",
		Title:       "Top skills",
		DefaultZone: "body",
		Asset:       "/widgets/skills.js",
	})
}
