(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ce-header{padding:.6em 0 3px;margin:0;line-height:1.25em;outline:none}.ce-header p,.ce-header div{padding:0!important;margin:0!important}")),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
const w = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 17V10.2135C19 10.1287 18.9011 10.0824 18.836 10.1367L16 12.5"/></svg>', f = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10 19 9.5 19 12C19 13.9771 16.0684 13.9997 16.0012 16.8981C15.9999 16.9533 16.0448 17 16.1 17L19.3 17"/></svg>', m = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10.5 16.8323 10 17.6 10C18.3677 10 19.5 10.311 19.5 11.5C19.5 12.5315 18.7474 12.9022 18.548 12.9823C18.5378 12.9864 18.5395 13.0047 18.5503 13.0063C18.8115 13.0456 20 13.3065 20 14.8C20 16 19.5 17 17.8 17C17.8 17 16 17 16 16.3"/></svg>', k = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 10L15.2834 14.8511C15.246 14.9178 15.294 15 15.3704 15C16.8489 15 18.7561 15 20.2 15M19 17C19 15.7187 19 14.8813 19 13.6"/></svg>', M = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 15.9C16 15.9 16.3768 17 17.8 17C19.5 17 20 15.6199 20 14.7C20 12.7323 17.6745 12.0486 16.1635 12.9894C16.094 13.0327 16 12.9846 16 12.9027V10.1C16 10.0448 16.0448 10 16.1 10H19.8"/></svg>', x = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.5 10C16.5 10.5 16 13.3285 16 15M16 15V15C16 16.1046 16.8954 17 18 17H18.3246C19.3251 17 20.3191 16.3492 20.2522 15.3509C20.0612 12.4958 16 12.6611 16 15Z"/></svg>';
/**
 * Header block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license MIT
 * @version 2.0.0
 */
class C {
  constructor({ data: e, config: t, api: i, readOnly: r, block: o }) {
    this.api = i, this.readOnly = r, this._block = o, this._config = t ?? null, this._data = this.normalizeData(e), this._element = this.getTag();
  }
  /**
   * Check if text content is empty and set empty string to inner html.
   * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
   *
   * @param {KeyboardEvent} e - key up event
   */
  onKeyUp(e) {
    if (!this._element)
      return;
    const { textContent: t } = this._element;
    t.replace(/<br\s*\/?>/gi, "").trim() === "" && (this._element.innerHTML = "");
  }
  get _CSS() {
    return {
      block: this.api.styles.block,
      wrapper: "ce-header"
    };
  }
  /**
   * Check if data is valid
   *
   * @param {any} data - data to check
   * @returns {data is HeaderData}
   * @private
   */
  isHeaderData(e) {
    return e.text !== void 0;
  }
  /**
   * Normalize input data
   *
   * @param {HeaderData} data - saved data to process
   *
   * @returns {HeaderData}
   * @private
   */
  normalizeData(e) {
    const t = { text: "", level: this.defaultLevel.number };
    return this.isHeaderData(e) && (t.text = e.text || "", e.level !== void 0 && !isNaN(parseInt(e.level.toString())) && (t.level = parseInt(e.level.toString()))), t;
  }
  /**
   * Return Tool's view
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this._element;
  }
  /**
   * Returns header block tunes config.
   *
   * Правило: если текущий блок — H1, скрываем все тюны
   * (нельзя удалить, нельзя переместить, нельзя сменить уровень).
   * Для H2/H3 показываем только переключатель уровней.
   */
  renderSettings() {
    return this._config.holdFirstHeader === !0 ? this._data.level === 1 ? [] : this.levels.filter((e) => e.number !== 1).map((e) => ({
      icon: e.svg,
      label: this.api.i18n.t(`Heading ${e.number}`),
      onActivate: () => this.setLevel(e.number),
      closeOnActivate: !0,
      isActive: this.currentLevel.number === e.number,
      render: () => document.createElement("div")
    })) : this.levels.map((e) => ({
      icon: e.svg,
      label: this.api.i18n.t(`Heading ${e.number}`),
      onActivate: () => this.setLevel(e.number),
      closeOnActivate: !0,
      isActive: this.currentLevel.number === e.number,
      render: () => document.createElement("div")
    }));
  }
  /**
   * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
   * @returns {ConversionConfig}
   */
  static get conversionConfig() {
    return {
      export: "text",
      // to convert Paragraph to other block, use 'text' property of saved data
      import: "text"
      // to covert other block's exported string to Paragraph, fill 'text' property of tool data
    };
  }
  /**
   * Callback for Block's settings buttons
   *
   * @param {number} level - level to set
   */
  setLevel(e) {
    this._config.holdFirstHeader === !0 && e === 1 || (this.data = {
      level: e,
      text: this.data.text
    });
  }
  /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * @param {HeaderData} data - saved data to merger with current block
   * @public
   */
  merge(e) {
    this._element.insertAdjacentHTML("beforeend", e.text);
  }
  /**
   * Validate Text block data:
   * - check for emptiness
   *
   * @param {HeaderData} blockData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(e) {
    return e.text.trim() !== "";
  }
  /**
   * Extract Tool's data from the view
   *
   * @param {HTMLHeadingElement} toolsContent - Text tools rendered view
   * @returns {HeaderData} - saved data
   * @public
   */
  save(e) {
    return {
      text: e.innerHTML,
      level: this.currentLevel.number
    };
  }
  /**
   * Sanitizer Rules
   */
  static get sanitize() {
    return {
      text: {
        br: !1
      }
    };
  }
  /**
   * Returns true to notify core that read-only is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get current Tools`s data
   *
   * @returns {HeaderData} Current data
   * @private
   */
  get data() {
    return this._data.text = this._element.innerHTML, this._data.level = this.currentLevel.number, this._data;
  }
  /**
   * Store data in plugin:
   * - at the this._data property
   * - at the HTML
   *
   * @param {HeaderData} data — data to set
   * @private
   */
  set data(e) {
    if (this._data = this.normalizeData(e), e.level !== void 0 && this._element.parentNode) {
      const t = this.getTag();
      t.innerHTML = this._element.innerHTML, this._element.parentNode.replaceChild(t, this._element), this._element = t;
    }
    e.text !== void 0 && (this._element.innerHTML = this._data.text || "");
  }
  /**
   * Get tag for target level
   * By default returns second-leveled header
   *
   * @returns {HTMLElement}
   */
  getTag() {
    var r, o, l, d;
    const e = this.currentLevel, t = document.createElement(e.tag);
    console.log("text", this._data.text), t.innerHTML = this._data.text || "", t.classList.add(this._CSS.wrapper), t.contentEditable = this.readOnly ? "false" : "true", this.readOnly || t.addEventListener("keyup", this.onKeyUp), e.number === 1 ? t.dataset.placeholder = this.api.i18n.t(((r = this._config) == null ? void 0 : r.placeholder) || "") : t.dataset.placeholder = this.api.i18n.t(((o = this._config) == null ? void 0 : o.placeholderLevel) || "");
    const i = e.number === 1 ? (l = this._config) == null ? void 0 : l.maxLength : (d = this._config) == null ? void 0 : d.maxLengthLevel;
    return i && (t.addEventListener("beforeinput", (n) => {
      var h;
      const s = ((h = t.textContent) == null ? void 0 : h.length) || 0;
      n.inputType.startsWith("delete") || s >= i && n.preventDefault();
    }), t.addEventListener("paste", (n) => {
      var v, p;
      n.preventDefault();
      const s = ((v = n.clipboardData) == null ? void 0 : v.getData("text/plain")) || "", a = ((p = t.textContent) == null ? void 0 : p.length) || 0, h = i - a;
      if (h <= 0)
        return;
      const L = s.slice(0, h), c = window.getSelection();
      if (!c || c.rangeCount === 0)
        return;
      const u = c.getRangeAt(0);
      u.deleteContents();
      const g = document.createTextNode(L);
      u.insertNode(g), u.setStartAfter(g), u.setEndAfter(g), c.removeAllRanges(), c.addRange(u);
    })), this._config.holdFirstHeader === !0 && this._data.level === 1 && t.addEventListener("keydown", (n) => {
      if (n.key === "Enter" && (n.preventDefault(), n.stopPropagation(), this.api.caret.setToNextBlock("start")), n.key === "Backspace") {
        const s = window.getSelection();
        if (s && s.rangeCount) {
          const a = s.getRangeAt(0);
          a.startOffset === 0 && a.collapsed && (n.preventDefault(), n.stopPropagation());
        }
      }
    }), t;
  }
  /**
   * Get current level
   *
   * @returns {level}
   */
  get currentLevel() {
    let e = this.levels.find((t) => t.number === this._data.level);
    return e || (e = this.defaultLevel), e;
  }
  /**
   * Return default level
   *
   * @returns {level}
   */
  get defaultLevel() {
    var e;
    if ((e = this._config) != null && e.defaultLevel) {
      const t = this.levels.find((i) => {
        var r;
        return i.number === ((r = this._config) == null ? void 0 : r.defaultLevel);
      });
      if (t)
        return t;
      console.warn("(ง'̀-'́)ง Heading Tool: the default level specified was not found in available levels");
    }
    return this.levels[1];
  }
  /**
   * @typedef {object} level
   * @property {number} number - level number
   * @property {string} tag - tag corresponds with level number
   * @property {string} svg - icon
   */
  /**
   * Available header levels
   *
   * @returns {level[]}
   */
  get levels() {
    var t;
    const e = [
      {
        number: 1,
        tag: "H1",
        svg: w
      },
      {
        number: 2,
        tag: "H2",
        svg: f
      },
      {
        number: 3,
        tag: "H3",
        svg: m
      },
      {
        number: 4,
        tag: "H4",
        svg: k
      },
      {
        number: 5,
        tag: "H5",
        svg: M
      },
      {
        number: 6,
        tag: "H6",
        svg: x
      }
    ];
    return (t = this._config) != null && t.levels ? e.filter(
      (i) => {
        var r;
        return (r = this._config) == null ? void 0 : r.levels.includes(i.number);
      }
    ) : e;
  }
  /**
   * Handle H1-H6 tags on paste to substitute it with header Tool
   *
   * @param {PasteEvent} event - event with pasted content
   */
  onPaste(e) {
    var i, r, o, l;
    const t = e.detail;
    if ("data" in t) {
      const d = t.data;
      let n = this.defaultLevel.number;
      switch (d.tagName) {
        case "H1":
          n = 1;
          break;
        case "H2":
          n = 2;
          break;
        case "H3":
          n = 3;
          break;
        case "H4":
          n = 4;
          break;
        case "H5":
          n = 5;
          break;
        case "H6":
          n = 6;
          break;
      }
      (i = this._config) != null && i.levels && (n = (r = this._config) == null ? void 0 : r.levels.reduce((s, a) => Math.abs(a - n) < Math.abs(s - n) ? a : s)), this._config.holdFirstHeader === !0 && n === 1 && (n = ((l = (o = this._config) == null ? void 0 : o.levels) == null ? void 0 : l.find((s) => s !== 1)) ?? 2), this.data = { level: n, text: d.innerHTML };
    }
  }
  static get pasteConfig() {
    return {
      tags: ["H1", "H2", "H3", "H4", "H5", "H6"]
    };
  }
  /**
   * H1 скрыт из тулбокса — пользователь не может добавить второй H1.
   * В тулбоксе показываем только H2 (и H3 если разрешён в levels).
   */
  static get toolbox() {
    return [
      // {
      //   icon: IconH1,
      //   title: I18n.t('tools.header', 'Heading 1'),
      //   data: { level: 1 },
      // },
      {
        icon: f,
        title: "Heading 2",
        data: { level: 2 }
      },
      {
        icon: m,
        title: "Heading 3",
        data: { level: 3 }
      }
    ];
  }
}
export {
  C as default
};
