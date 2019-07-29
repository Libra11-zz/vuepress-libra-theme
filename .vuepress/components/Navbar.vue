<template>
  <header>
    <div class="flexbox">
      <div class="center-on-mobiles">
        <h1>
          <a href="/" class="logo">
            <img src="/img/logo-2x.png" width="140" height="65" alt />
          </a>
        </h1>
      </div>
      <nav class="main-nav hide-on-mobiles">
        <ul>
          <li class="current">
            <a href="/">主页</a>
          </li>

          <li>
            <a href="/docs/">分类</a>
          </li>

          <li>
            <a href="/resources/">标签</a>
          </li>

          <li>
            <a href="/showcase/">时间线</a>
          </li>

          <li>
            <a href="/news/">联系我</a>
          </li>
        </ul>
      </nav>
      <div class="search hide-on-mobiles">
        <form novalidate="novalidate" onsubmit="return false;" class="searchbox">
          <div role="search" class="searchbox__wrapper">
            <span
              class="algolia-autocomplete"
              style="position: relative; display: inline-block; direction: ltr;"
            >
              <input
                id="docsearch"
                type="search"
                name="search"
                placeholder="搜索博客......"
                autocomplete="off"
                required="required"
                class="searchbox__input ds-input"
                spellcheck="false"
                role="combobox"
                aria-autocomplete="list"
                aria-expanded="false"
                aria-label="search input"
                aria-owns="algolia-autocomplete-listbox-0"
                dir="auto"
                style="position: relative; vertical-align: top;"
              />
              <pre
                aria-hidden="true"
                style="position: absolute; visibility: hidden; white-space: pre; font-family: sans-serif; font-size: 15.75px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: normal; text-indent: 0px; text-rendering: auto; text-transform: none;"
              ></pre>
              <span
                class="ds-dropdown-menu"
                role="listbox"
                id="algolia-autocomplete-listbox-0"
                style="position: absolute; top: 100%; z-index: 100; display: none; left: 0px; right: auto;"
              >
                <div class="ds-dataset-1"></div>
              </span>
            </span>
            <button type="submit" title="Submit your search query." class="searchbox__submit">
              <svg width="12" height="12" role="img" aria-label="Search">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sbx-icon-search-13" />
              </svg>
            </button>
            <button type="reset" title="Clear the search query." class="searchbox__reset hide">
              <svg width="12" height="12" role="img" aria-label="Reset">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sbx-icon-clear-3" />
              </svg>
            </button>
          </div>
        </form>

        <div class="svg-icons" style="height: 0; width: 0; position: absolute; visibility: hidden">
          <svg xmlns="http://www.w3.org/2000/svg">
            <symbol id="sbx-icon-clear-3" viewBox="0 0 40 40">
              <path
                d="M16.228 20L1.886 5.657 0 3.772 3.772 0l1.885 1.886L20 16.228 34.343 1.886 36.228 0 40 3.772l-1.886 1.885L23.772 20l14.342 14.343L40 36.228 36.228 40l-1.885-1.886L20 23.772 5.657 38.114 3.772 40 0 36.228l1.886-1.885L16.228 20z"
                fill-rule="evenodd"
              />
            </symbol>
            <symbol id="sbx-icon-search-13" viewBox="0 0 40 40">
              <path
                d="M26.806 29.012a16.312 16.312 0 0 1-10.427 3.746C7.332 32.758 0 25.425 0 16.378 0 7.334 7.333 0 16.38 0c9.045 0 16.378 7.333 16.378 16.38 0 3.96-1.406 7.593-3.746 10.426L39.547 37.34c.607.608.61 1.59-.004 2.203a1.56 1.56 0 0 1-2.202.004L26.807 29.012zm-10.427.627c7.322 0 13.26-5.938 13.26-13.26 0-7.324-5.938-13.26-13.26-13.26-7.324 0-13.26 5.936-13.26 13.26 0 7.322 5.936 13.26 13.26 13.26z"
                fill-rule="evenodd"
              />
            </symbol>
          </svg>
        </div>
      </div>
    </div>
    <nav class="mobile-nav show-on-mobiles">
      <ul>
        <li class="current">
          <a href="/">Home</a>
        </li>

        <li>
          <a href="/docs/">Docs</a>
        </li>

        <li>
          <a href="/resources/">Resources</a>
        </li>

        <li>
          <a href="/news/">News</a>
        </li>

        <li>
          <a href="https://github.com/jekyll/jekyll">GitHub</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@media screen and (max-width: 768px) {
  .hide-on-mobiles {
    display: none !important;
  }
}
@media screen and (max-width: 768px) {
  .show-on-mobiles {
    display: block !important;
  }
}
@media screen and (max-width: 768px) {
  .center-on-mobiles {
    text-align: center !important;
  }
}
.show-on-mobiles {
  display: none;
}
li {
  list-style: none;
  display: inline-block;
  vertical-align: middle;
  padding: 0.5em 1em;
}
a {
  color: #ffcc00;
  text-decoration: none;
  background-color: transparent;
}
header {
  font-size: 21px;
  padding: 15px;
  background: #2b2b2b;
  width: 100%;
  .flexbox {
    display: flex;
    height: 50px;
    align-items: center;
    * {
      margin: 0 auto;
    }
    .main-nav {
      display: inline-block;
      ul {
        padding: 0;
        margin: 0;
        white-space: nowrap;
        display: inline-block;
      }
      li.current {
        a {
          background-color: #fc0;
          color: #222;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5),
            0 1px 5px rgba(0, 0, 0, 0.5);
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
          &:hover {
            background-color: #fc0;
            color: #222;
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5),
              0 1px 5px rgba(0, 0, 0, 0.5);
            text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
          }
        }
      }
      li {
        display: inline-block;
        a {
          border-radius: 5px;
          font-weight: 900;
          font-size: 0.75em;
          padding: 0.5em 1em;
          text-shadow: none;
          text-transform: uppercase;
          transition: all 0.25s;
          &:hover {
            color: #f90;
            background-color: #252525;
            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5),
              0 1px 0 rgba(255, 255, 255, 0.1);
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
          }
        }
      }
    }
    .search {
      color: #ddd;
      .searchbox {
        display: inline-block;
        position: relative;
        width: 200px;
        height: 32px !important;
        padding-top: 1px;
        white-space: nowrap;
        box-sizing: border-box;
        visibility: visible !important;
        .searchbox__wrapper {
          width: 100%;
          height: 100%;
          z-index: 999;
          position: relative;
          .algolia-autocomplete {
            display: block;
            width: 100%;
            height: 100%;
            .searchbox__input {
              padding: 6px 5px 5px 29px;
              font-size: 0.75em;
              border: none;
              border-radius: 5px;
              width: 100%;
              height: 100%;
              color: #555;
              background-color: #333 !important;
              box-shadow: 0 0 1px 0 #555;
            }
          }
          .searchbox__submit {
            position: absolute;
            top: 0;
            margin: 0;
            border: 0;
            border-radius: 16px 0 0 16px;
            background-color: rgba(69, 142, 225, 0);
            padding: 0;
            width: 32px;
            height: 100%;
            vertical-align: middle;
            text-align: center;
            font-size: inherit;
            user-select: none;
            right: inherit;
            left: 0;
            &:before {
              display: inline-block;
              margin-right: -4px;
              height: 100%;
              vertical-align: middle;
              content: "";
            }
            svg {
              width: 14px;
              height: 14px;
              vertical-align: middle;
              fill: #ffcc00;
            }
          }
          .searchbox__reset {
            display: block;
            position: absolute;
            top: 0;
            right: 8px;
            margin: 0;
            border: 0;
            background: none;
            cursor: pointer;
            padding: 0;
            font-size: inherit;
            user-select: none;
            fill: rgba(0, 0, 0, 0.5);
          }
        }
      }
    }
  }
}
</style>