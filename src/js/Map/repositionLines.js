
export default function repositionLines() {
  let point1 = false, point2 = false

  for (let index in this.lines) {
    for (let mindex in this.markers) {
      if (this.markers[mindex].config.name === this.lines[index].config.from) {
        point1 = this.getMarkerPosition(this.markers[mindex].config)
      }
      if (this.markers[mindex].config.name === this.lines[index].config.to) {
        point2 = this.getMarkerPosition(this.markers[mindex].config)
      }
    }

    if (point1 !== false && point2 !== false) {
      this.lines[index].element.setStyle({
        x1: point1.x,
        y1: point1.y,
        x2: point2.x,
        y2: point2.y,
      })
    }
  }
}
