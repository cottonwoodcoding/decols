details = [
  "Complete car, truck, motorcycle builds",
  "Rust repair",
  "Restorations",
  "Welding repairs",
  "Engine swaps",
  "Full fabrication shop",
  "Metal shaping",
  "Minor - major mechanical",
  "Custom built parts",
  "Machining",
  "Suspensions",
  "Custom exhaust",
  "Custom stereo installation",
  "Custom electrical"
]

details.each do |detail|
  Detail.create(name: detail)
end

Location.create(loc_type: 'shop', street: '1542 W 13595 S', city: 'Riverton', state: 'UT', zip: '84065', lat: 40.5063358, long: -111.9406609)
Location.create(loc_type: 'office', street: '14676 S Heritage Crest Way', city: 'Bluffdale', state: 'UT', zip: '84065', lat: 40.484684, long: -111.9147137)
