export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 9,
            "column": 2
          },
          "end": {
            "line": 11,
            "column": 2
          }
        },
        "moduleName": "simple-fit/templates/recipe.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
        return morphs;
      },
      statements: [
        ["content","ing",["loc",[null,[10,8],[10,15]]],0,0,0,0]
      ],
      locals: ["ing"],
      templates: []
    };
  }());
  var child1 = (function() {
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 16,
            "column": 2
          },
          "end": {
            "line": 18,
            "column": 2
          }
        },
        "moduleName": "simple-fit/templates/recipe.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
        return morphs;
      },
      statements: [
        ["content","model.steps",["loc",[null,[17,8],[17,23]]],0,0,0,0]
      ],
      locals: ["step"],
      templates: []
    };
  }());
  return {
    meta: {
      "revision": "Ember@2.8.2+31ba4c74",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 23,
          "column": 0
        }
      },
      "moduleName": "simple-fit/templates/recipe.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("br");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("img");
      dom.setAttribute(el1,"height","200");
      dom.setAttribute(el1,"widtch","200");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("br");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("br");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("ul");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("h4");
      var el3 = dom.createTextNode("Ingredient List");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("ul");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("h4");
      var el3 = dom.createTextNode("Steps");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("ol");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [5]);
      var morphs = new Array(5);
      morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
      morphs[1] = dom.createAttrMorph(element0, 'src');
      morphs[2] = dom.createMorphAt(dom.childAt(fragment, [11]),3,3);
      morphs[3] = dom.createMorphAt(dom.childAt(fragment, [13, 3]),1,1);
      morphs[4] = dom.createMorphAt(fragment,15,15,contextualElement);
      return morphs;
    },
    statements: [
      ["content","model.title",["loc",[null,[2,4],[2,19]]],0,0,0,0],
      ["attribute","src",["concat",[["get","model.image",["loc",[null,[4,12],[4,23]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],
      ["block","each",[["get","model.ingredients",["loc",[null,[9,10],[9,27]]],0,0,0,0]],[],0,null,["loc",[null,[9,2],[11,11]]]],
      ["block","each",[["get","model.steps",["loc",[null,[16,10],[16,21]]],0,0,0,0]],[],1,null,["loc",[null,[16,2],[18,11]]]],
      ["content","outlet",["loc",[null,[22,0],[22,10]]],0,0,0,0]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));