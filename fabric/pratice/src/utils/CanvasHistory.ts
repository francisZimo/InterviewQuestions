export function CanvasHistory(canvas: any) {
  var state: any[] = [];
  var mods = 0;

  function updateModifications(savehistory: boolean) {
    // if (savehistory === true) {
    //   const myjson = JSON.stringify(canvas);
    //   state.push(myjson);
    // }
    const myjson = JSON.stringify(canvas);
    state.push(myjson);
  }

  var undo = function undo() {
    if (mods < state.length) {
      canvas.clear().renderAll();
      canvas.loadFromJSON(state[state.length - 1 - mods - 1]);
      canvas.renderAll();
      //console.log("geladen " + (state.length-1-mods-1));
      //console.log("state " + state.length);
      mods += 1;
      //console.log("mods " + mods);
    }
  };

  var redo = function redo() {
    if (mods > 0) {
      canvas.clear().renderAll();
      canvas.loadFromJSON(state[state.length - 1 - mods + 1]);
      canvas.renderAll();
      //console.log("geladen " + (state.length-1-mods+1));
      mods -= 1;
      //console.log("state " + state.length);
      //console.log("mods " + mods);
    }
  };

  canvas.on({
    'object:added': () => {
      console.log('add');
      updateModifications(true);
    },
    'object:modified': () => {
      console.log('modified');
      updateModifications(true);
    },
  });

  return {
    undo: undo,
    redo: redo,
  };
}
