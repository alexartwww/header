(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ce-header{padding:.6em 0 3px;margin:0;line-height:1.25em;outline:none}.ce-header p,.ce-header div{padding:0!important;margin:0!important}")),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
const w = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 17V10.2135C19 10.1287 18.9011 10.0824 18.836 10.1367L16 12.5"/></svg>', m = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10 19 9.5 19 12C19 13.9771 16.0684 13.9997 16.0012 16.8981C15.9999 16.9533 16.0448 17 16.1 17L19.3 17"/></svg>', L = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10.5 16.8323 10 17.6 10C18.3677 10 19.5 10.311 19.5 11.5C19.5 12.5315 18.7474 12.9022 18.548 12.9823C18.5378 12.9864 18.5395 13.0047 18.5503 13.0063C18.8115 13.0456 20 13.3065 20 14.8C20 16 19.5 17 17.8 17C17.8 17 16 17 16 16.3"/></svg>', x = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 10L15.2834 14.8511C15.246 14.9178 15.294 15 15.3704 15C16.8489 15 18.7561 15 20.2 15M19 17C19 15.7187 19 14.8813 19 13.6"/></svg>', k = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 15.9C16 15.9 16.3768 17 17.8 17C19.5 17 20 15.6199 20 14.7C20 12.7323 17.6745 12.0486 16.1635 12.9894C16.094 13.0327 16 12.9846 16 12.9027V10.1C16 10.0448 16.0448 10 16.1 10H19.8"/></svg>', M = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.5 10C16.5 10.5 16 13.3285 16 15M16 15V15C16 16.1046 16.8954 17 18 17H18.3246C19.3251 17 20.3191 16.3492 20.2522 15.3509C20.0612 12.4958 16 12.6611 16 15Z"/></svg>';
/**
 * Header block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license MIT
 * @version 2.0.0
 */
class b {
  constructor({ data: e, config: t, api: s, readOnly: i, block: c }) {
    this.api = s, this.readOnly = i, this._block = c, this._config = t ?? null, this._data = this.normalizeData(e), this._element = this.getTag();
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
    var i, c, g, u;
    const e = this.currentLevel, t = document.createElement(e.tag);
    t.innerHTML = this._data.text || "", t.classList.add(this._CSS.wrapper), t.contentEditable = this.readOnly ? "false" : "true", this.readOnly || t.addEventListener("keyup", this.onKeyUp), e.number === 1 ? t.dataset.placeholder = this.api.i18n.t(((i = this._config) == null ? void 0 : i.placeholder) || "") : t.dataset.placeholder = this.api.i18n.t(((c = this._config) == null ? void 0 : c.placeholderLevel) || "");
    const s = e.number === 1 ? (g = this._config) == null ? void 0 : g.maxLength : (u = this._config) == null ? void 0 : u.maxLengthLevel;
    return s && (t.addEventListener("beforeinput", (r) => {
      var n;
      const o = ((n = t.textContent) == null ? void 0 : n.length) || 0;
      r.inputType.startsWith("delete") || o >= s && r.preventDefault();
    }), t.addEventListener("paste", (r) => {
      var v, p;
      r.preventDefault(), r.stopPropagation();
      const o = ((v = r.clipboardData) == null ? void 0 : v.getData("text/plain")) || "", l = ((p = t.textContent) == null ? void 0 : p.length) || 0, n = s - l;
      if (n <= 0)
        return;
      const f = o.slice(0, n), d = window.getSelection();
      if (!d || d.rangeCount === 0)
        return;
      const a = d.getRangeAt(0);
      a.deleteContents();
      const h = document.createTextNode(f);
      a.insertNode(h), a.setStartAfter(h), a.setEndAfter(h), d.removeAllRanges(), d.addRange(a);
    })), this._config.holdFirstHeader === !0 && this._data.level === 1 && t.addEventListener("keydown", (r) => {
      if (r.key === "Enter" && (r.preventDefault(), r.stopPropagation(), this.api.caret.setToNextBlock("start")), r.key === "Backspace") {
        const o = window.getSelection();
        if (o && o.rangeCount) {
          const l = o.getRangeAt(0);
          l.startOffset === 0 && l.collapsed && (r.preventDefault(), r.stopPropagation());
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
      const t = this.levels.find((s) => {
        var i;
        return s.number === ((i = this._config) == null ? void 0 : i.defaultLevel);
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
        svg: m
      },
      {
        number: 3,
        tag: "H3",
        svg: L
      },
      {
        number: 4,
        tag: "H4",
        svg: x
      },
      {
        number: 5,
        tag: "H5",
        svg: k
      },
      {
        number: 6,
        tag: "H6",
        svg: M
      }
    ];
    return (t = this._config) != null && t.levels ? e.filter(
      (s) => {
        var i;
        return (i = this._config) == null ? void 0 : i.levels.includes(s.number);
      }
    ) : e;
  }
  /**
   * Handle H1-H6 tags on paste to substitute it with header Tool
   *
   * @param {PasteEvent} event - event with pasted content
   */
  onPaste(e) {
    var s, i, c, g, u, r, o;
    const t = e.detail;
    if ("data" in t) {
      const l = t.data;
      let n = this.defaultLevel.number;
      switch (l.tagName) {
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
      (s = this._config) != null && s.levels && (n = this._config.levels.reduce((a, h) => Math.abs(h - n) < Math.abs(a - n) ? h : a)), this._config.holdFirstHeader === !0 && n === 1 && (n = ((c = (i = this._config) == null ? void 0 : i.levels) == null ? void 0 : c.find((a) => a !== 1)) ?? 2);
      const f = n === 1 ? (g = this._config) == null ? void 0 : g.maxLength : (u = this._config) == null ? void 0 : u.maxLengthLevel;
      let d = l.innerHTML || l.textContent || "";
      if (f) {
        const a = ((o = (r = this._element) == null ? void 0 : r.textContent) == null ? void 0 : o.length) || 0, h = Math.max(0, f - a), v = l.textContent || "";
        v.length > h && (d = v.slice(0, h));
      }
      this.data = { level: n, text: d };
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
        icon: m,
        title: "Heading 2",
        data: { level: 2 }
      },
      {
        icon: L,
        title: "Heading 3",
        data: { level: 3 }
      }
    ];
  }
}
export {
  b as default
};
