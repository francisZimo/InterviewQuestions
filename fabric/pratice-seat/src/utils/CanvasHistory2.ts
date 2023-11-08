export function CanvasHistory(canvas: any) {
  var history: any[] = [];
  var currentStep = -1;

  function saveState() {
    var state = JSON.stringify(canvas.toObject());
    history.push(state);
    console.log(history, '===save');
    currentStep++;
  }

  function undo() {
    if (currentStep > 0) {
      currentStep--;
      console.log(history, '===undo', currentStep);
      canvas.loadFromJSON(history[currentStep], function () {
        canvas.renderAll();
      });
    }
  }

  function redo() {
    if (currentStep < history.length - 1) {
      currentStep++;
      console.log(history, '===redo', currentStep);
      canvas.loadFromJSON(history[currentStep], function () {
        canvas.renderAll();
      });
    }
  }

  canvas.on({
    'object:added': () => {
      console.log('add');
      saveState();
    },
    'object:modified': () => {
      console.log('modified');
      saveState();
    },
  });

  return {
    undo: undo,
    redo: redo,
  };
}
