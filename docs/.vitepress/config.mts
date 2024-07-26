import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Git Lecture",
  base: "/git-exercise/",
  description: "Git講習会実習編",
  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "事前準備",
        items: [
          { text: "Git クライアントのインストール", link: "/install.md" },
        ],
      },
      {
        text: "実習編",
        items: [
          { text: "1. Git レポジトリの作成", link: "/repository.md" },
          { text: "2. Git レポジトリのクローン", link: "/clone.md" },
          { text: "3. Commit & Push", link: "/push.md" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/hijiki51/git-exercise" },
    ],
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "検索",
            buttonAriaLabel: "検索ボックスを開く",
          },
          modal: {
            displayDetails: "詳細を表示",
            resetButtonTitle: "リセット",
            backButtonTitle: "戻る",
            noResultsText: "見つかりませんでした",
            footer: {
              selectText: "選択",
              selectKeyAriaLabel: "結果を選択するには、上下キーを使用します",
              navigateText: "移動",
              navigateUpKeyAriaLabel:
                "前の結果に移動するには、上キーを使用します",
              navigateDownKeyAriaLabel:
                "次の結果に移動するには、下キーを使用します",
              closeText: "閉じる",
            },
          },
        },
      },
    },
  },
});
