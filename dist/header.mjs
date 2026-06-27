(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ce-header{padding:.6em 0 3px;margin:0;line-height:1.25em;outline:none}.ce-header p,.ce-header div{padding:0!important;margin:0!important}")),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
const g = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 17V10.2135C19 10.1287 18.9011 10.0824 18.836 10.1367L16 12.5"/></svg>', c = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10 19 9.5 19 12C19 13.9771 16.0684 13.9997 16.0012 16.8981C15.9999 16.9533 16.0448 17 16.1 17L19.3 17"/></svg>', u = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10.5 16.8323 10 17.6 10C18.3677 10 19.5 10.311 19.5 11.5C19.5 12.5315 18.7474 12.9022 18.548 12.9823C18.5378 12.9864 18.5395 13.0047 18.5503 13.0063C18.8115 13.0456 20 13.3065 20 14.8C20 16 19.5 17 17.8 17C17.8 17 16 17 16 16.3"/></svg>', v = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 10L15.2834 14.8511C15.246 14.9178 15.294 15 15.3704 15C16.8489 15 18.7561 15 20.2 15M19 17C19 15.7187 19 14.8813 19 13.6"/></svg>', p = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 15.9C16 15.9 16.3768 17 17.8 17C19.5 17 20 15.6199 20 14.7C20 12.7323 17.6745 12.0486 16.1635 12.9894C16.094 13.0327 16 12.9846 16 12.9027V10.1C16 10.0448 16.0448 10 16.1 10H19.8"/></svg>', f = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.5 10C16.5 10.5 16 13.3285 16 15M16 15V15C16 16.1046 16.8954 17 18 17H18.3246C19.3251 17 20.3191 16.3492 20.2522 15.3509C20.0612 12.4958 16 12.6611 16 15Z"/></svg>';
/**
 * Header block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license MIT
 * @version 2.0.0
 */
class m {
  constructor({ data: t, config: e, api: n, readOnly: r, block: a }) {
    this.api = n, this.readOnly = r, this._block = a, this._config = e ?? null, this._data = this.normalizeData(t), this._element = this.getTag();
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
  isHeaderData(t) {
    return t.text !== void 0;
  }
  /**
   * Normalize input data
   *
   * @param {HeaderData} data - saved data to process
   *
   * @returns {HeaderData}
   * @private
   */
  normalizeData(t) {
    const e = { text: "", level: this.defaultLevel.number };
    return this.isHeaderData(t) && (e.text = t.text || "", t.level !== void 0 && !isNaN(parseInt(t.level.toString())) && (e.level = parseInt(t.level.toString()))), e;
  }
  /**
   * Return Tool's view
   *
   * @returns {HTMLHeadingElement}
   * @public
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
    var t;
    return ((t = this._config) == null ? void 0 : t.holdFirstHeader) === !0 ? this._data.level === 1 ? [] : this.levels.filter((e) => e.number !== 1).map((e) => ({
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
  setLevel(t) {
    var e;
    ((e = this._config) == null ? void 0 : e.holdFirstHeader) === !0 && t === 1 || (this.data = {
      level: t,
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
  merge(t) {
    this._element.insertAdjacentHTML("beforeend", t.text);
  }
  /**
   * Validate Text block data:
   * - check for emptiness
   *
   * @param {HeaderData} blockData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(t) {
    return t.text.trim() !== "";
  }
  /**
   * Extract Tool's data from the view
   *
   * @param {HTMLHeadingElement} toolsContent - Text tools rendered view
   * @returns {HeaderData} - saved data
   * @public
   */
  save(t) {
    return {
      text: t.innerHTML,
      level: this.currentLevel.number
    };
  }
  /**
   * Sanitizer Rules
   */
  static get sanitize() {
    return {
      level: !1,
      text: {}
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
  set data(t) {
    if (this._data = this.normalizeData(t), t.level !== void 0 && this._element.parentNode) {
      const e = this.getTag();
      e.innerHTML = this._element.innerHTML, this._element.parentNode.replaceChild(e, this._element), this._element = e;
    }
    t.text !== void 0 && (this._element.innerHTML = this._data.text || "");
  }
  /**
   * Get tag for target level
   * By default returns second-leveled header
   *
   * @returns {HTMLElement}
   */
  getTag() {
    var n, r, a;
    const t = this.currentLevel, e = document.createElement(t.tag);
    return e.innerHTML = this._data.text || "", e.classList.add(this._CSS.wrapper), e.contentEditable = this.readOnly ? "false" : "true", t.number === 1 ? e.dataset.placeholder = this.api.i18n.t(((n = this._config) == null ? void 0 : n.placeholder) || "") : e.dataset.placeholder = this.api.i18n.t(((r = this._config) == null ? void 0 : r.placeholderLevel) || ""), ((a = this._config) == null ? void 0 : a.holdFirstHeader) === !0 && this._data.level === 1 && e.addEventListener("keydown", (s) => {
      if (s.key === "Enter" && (s.preventDefault(), s.stopPropagation(), this.api.caret.setToNextBlock("start")), s.key === "Backspace") {
        const l = window.getSelection();
        if (l && l.rangeCount) {
          const o = l.getRangeAt(0);
          o.startOffset === 0 && o.collapsed && (s.preventDefault(), s.stopPropagation());
        }
      }
    }), e;
  }
  /**
   * Get current level
   *
   * @returns {level}
   */
  get currentLevel() {
    let t = this.levels.find((e) => e.number === this._data.level);
    return t || (t = this.defaultLevel), t;
  }
  /**
   * Return default level
   *
   * @returns {level}
   */
  get defaultLevel() {
    var t;
    if ((t = this._config) != null && t.defaultLevel) {
      const e = this.levels.find((n) => {
        var r;
        return n.number === ((r = this._config) == null ? void 0 : r.defaultLevel);
      });
      if (e)
        return e;
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
    var e;
    const t = [
      {
        number: 1,
        tag: "H1",
        svg: g
      },
      {
        number: 2,
        tag: "H2",
        svg: c
      },
      {
        number: 3,
        tag: "H3",
        svg: u
      },
      {
        number: 4,
        tag: "H4",
        svg: v
      },
      {
        number: 5,
        tag: "H5",
        svg: p
      },
      {
        number: 6,
        tag: "H6",
        svg: f
      }
    ];
    return (e = this._config) != null && e.levels ? t.filter(
      (n) => {
        var r;
        return (r = this._config) == null ? void 0 : r.levels.includes(n.number);
      }
    ) : t;
  }
  /**
   * Handle H1-H6 tags on paste to substitute it with header Tool
   *
   * @param {PasteEvent} event - event with pasted content
   */
  onPaste(t) {
    var n, r, a, s, l;
    const e = t.detail;
    if ("data" in e) {
      const o = e.data;
      let i = this.defaultLevel.number;
      switch (o.tagName) {
        case "H1":
          i = 1;
          break;
        case "H2":
          i = 2;
          break;
        case "H3":
          i = 3;
          break;
        case "H4":
          i = 4;
          break;
        case "H5":
          i = 5;
          break;
        case "H6":
          i = 6;
          break;
      }
      (n = this._config) != null && n.levels && (i = (r = this._config) == null ? void 0 : r.levels.reduce((h, d) => Math.abs(d - i) < Math.abs(h - i) ? d : h)), ((a = this._config) == null ? void 0 : a.holdFirstHeader) === !0 && i === 1 && (i = ((l = (s = this._config) == null ? void 0 : s.levels) == null ? void 0 : l.find((h) => h !== 1)) ?? 2), this.data = { level: i, text: o.innerHTML };
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
      //   title: 'Heading 1',
      //   data: { level: 1 },
      // },
      {
        icon: c,
        title: "Heading 2",
        data: { level: 2 }
      },
      {
        icon: u,
        title: "Heading 3",
        data: { level: 3 }
      }
    ];
  }
}
export {
  m as default
};
