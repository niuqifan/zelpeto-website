# ZELPETO website

最新可编辑网站源码，包括首页、OEM 定制页、狗狗用品页和图片素材。纯 HTML/CSS/JavaScript，无需构建。

## 在另一台电脑继续工作

1. 安装 Git 和 Node.js（LTS）。
2. 克隆：`git clone https://github.com/niuqifan/zelpeto-website.git`
3. 打开克隆的文件夹，在终端运行：`node preview.cjs`
4. 浏览器访问 http://127.0.0.1:4175

直接编辑根目录的 HTML、CSS、JS 文件，图片在 assets/ 中。不要将旧项目生成脚本覆盖到这些文件上。

修改后提交并推送：

```sh
git add .
git commit -m "Update website"
git push
```

换电脑开始工作前先 `git pull`，避免两台电脑版本不同。

## 当前状态

网站仍在完善。部分页面含预览说明和待完善内容；询盘表单尚未接通自动邮件发送，WhatsApp 可用于联系。产品规格和 MOQ 需按实际产品确认。

GitHub Pages: https://niuqifan.github.io/zelpeto-website/
