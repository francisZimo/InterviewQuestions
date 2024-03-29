export const seatData = {
  version: '5.8.4',
  platform: 'html5',
  images: {},
  dataBox: {
    class: 'b2.ElementBox',
    s: {
      'background.type': 'vector',
      'background.vector.fill': true,
      'background.vector.fill.color': 'white',
      'background.vector.shape': 'rect',
    },
    layers: [
      { name: 'Default', visible: true, editable: true, movable: true },
      { id: 'bottom', name: 'Default', visible: true, editable: true, movable: true },
      { id: 'top', name: 'Default', visible: true, editable: true, movable: true },
    ],
  },
  datas: [
    {
      class: 'b2.RowNode',
      ref: 0,
      p: { name: '0排', location: { x: 44, y: 68 } },
      s: {
        'group.fill': false,
        'group.fill.color': '#FFFFFF',
        'group.shape': 'roundrect',
        'group.outline.width': 0,
        'group.outline.color': '#000000',
        'group.padding': 2,
        'vector.outline.pattern': [2, 2],
        'shadow.xoffset': 0,
        'shadow.yoffset': 0,
        'label.position': 'center',
        'label.xoffset': -50,
        'label.yoffset': 0,
      },
    },
    {
      class: 'b2.SeatNode',
      ref: 1,
      p: { name: '0-0', parent: 0, location: { x: 30, y: 70 }, width: 20, height: 20 },
      s: {
        'body.type': 'vector',
        'vector.shape': 'circle',
        'vector.fill.color': '#cdcdcd',
        'vector.outline.width': 1,
        'vector.outline.color': '#ff0000',
        'vector.outline.pattern': [10, 0],
        'label.position': 'center',
        'label.font': '10px arial',
        'label2.position': 'left.left',
        'label2.yoffset': 0,
        'shadow.blur': 4,
        'shadow.xoffset': 0,
        'shadow.yoffset': 0,
        'select.style': 'shadow',
        'select.padding': 0,
        'select.color': '#ff0000',
      },
    },
    {
      class: 'b2.SeatNode',
      ref: 2,
      p: { name: '0-1', parent: 0, location: { x: 70, y: 70 }, width: 20, height: 20 },
      s: {
        'body.type': 'vector',
        'vector.shape': 'circle',
        'vector.fill.color': '#cdcdcd',
        'vector.outline.width': 1,
        'vector.outline.color': '#ff0000',
        'vector.outline.pattern': [10, 0],
        'label.position': 'center',
        'label.font': '10px arial',
        'label2.position': 'left.left',
        'label2.yoffset': 0,
        'shadow.blur': 4,
        'shadow.xoffset': 0,
        'shadow.yoffset': 0,
        'select.style': 'shadow',
        'select.padding': 0,
        'select.color': '#ff0000',
      },
      c: { 'business.seat': 1 },
    },
    {
      class: 'b2.RowNode',
      ref: 3,
      p: { name: '2排', location: { x: 64, y: 108 } },
      s: {
        'group.fill': false,
        'group.fill.color': '#FFFFFF',
        'group.shape': 'roundrect',
        'group.outline.width': 0,
        'group.outline.color': '#000000',
        'group.padding': 2,
        'vector.outline.pattern': [2, 2],
        'shadow.xoffset': 0,
        'shadow.yoffset': 0,
        'label.position': 'center',
        'label.xoffset': -70,
        'label.yoffset': 0,
      },
    },
    {
      class: 'b2.SeatNode',
      ref: 4,
      p: { name: '2-0', parent: 3, location: { x: 30, y: 110 }, width: 20, height: 20 },
      s: {
        'body.type': 'vector',
        'vector.shape': 'circle',
        'vector.fill.color': '#cdcdcd',
        'vector.outline.width': 1,
        'vector.outline.color': '#000000',
        'vector.outline.pattern': [10, 0],
        'label.position': 'center',
        'label.font': '10px arial',
        'label2.position': 'left.left',
        'label2.yoffset': 0,
        'shadow.blur': 4,
        'shadow.xoffset': 0,
        'shadow.yoffset': 0,
        'select.style': 'shadow',
        'select.padding': 0,
        'select.color': '#ff0000',
      },
    },
    {
      class: 'b2.SeatNode',
      ref: 5,
      p: { name: '2-1', parent: 3, location: { x: 70, y: 110 }, width: 20, height: 20 },
      s: {
        'body.type': 'vector',
        'vector.shape': 'circle',
        'vector.fill.color': '#cdcdcd',
        'vector.outline.width': 1,
        'vector.outline.color': '#000000',
        'vector.outline.pattern': [10, 0],
        'label.position': 'center',
        'label.font': '10px arial',
        'label2.position': 'left.left',
        'label2.yoffset': 0,
        'shadow.blur': 4,
        'shadow.xoffset': 0,
        'shadow.yoffset': 0,
        'select.style': 'shadow',
        'select.padding': 0,
        'select.color': '#ff0000',
      },
      c: { 'business.seat': 1 },
    },
    {
      class: 'b2.SeatNode',
      ref: 6,
      p: { name: '2-2', parent: 3, location: { x: 110, y: 110 }, width: 20, height: 20 },
      s: {
        'body.type': 'vector',
        'vector.shape': 'circle',
        'vector.fill.color': '#cdcdcd',
        'vector.outline.width': 1,
        'vector.outline.color': '#000000',
        'vector.outline.pattern': [10, 0],
        'label.position': 'center',
        'label.font': '10px arial',
        'label2.position': 'left.left',
        'label2.yoffset': 0,
        'shadow.blur': 4,
        'shadow.xoffset': 0,
        'shadow.yoffset': 0,
        'select.style': 'shadow',
        'select.padding': 0,
        'select.color': '#ff0000',
      },
      c: { 'business.seat': 2 },
    },
  ],
};
