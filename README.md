Electron Setup
====

## 概要

Electron を始めるために準備していきます。

Windows 10を対象とします。

Eclipse でコーディングを行い、VSCodeでデバッグするスタイルです。

We will prepare to get started with Electron.

For Windows 10.

## セットアップ手順

### Eclipseのプロジェクトを作成

いつもの感じでEclipseからプロジェクトを新規作成します。

プロジェクトの種類はWEB系のものが揃ってたらなんでも良いです。

個人的には[こちら](https://aulta.co.jp/archives/8343)を使い、「新規PHPプロジェクト」として作成しています。

※設置するパスには日本語を含まないようにしてください。

### ファイルの配置

このリポジトリを「Download ZIP」して、解凍して配置します。

次のようになります。

<img width="167" height="208" alt="" src="https://aulta.co.jp/wp-content/uploads/2021/02/2021-02-21_11h07_34.png">

※README.md の中身は全削除して、作成しようとしているアプリの内容に変えてください。

### Node.js を配置

[Node.js 公式サイト](https://nodejs.org/)にアクセスします。

1. グローバルナビから「DOWNLOADS」
2. LTS（Recommended For Most Users）
3. Windows Binary (.zip)
4. 64-bit ( or 32bit ) をクリック

ダウンロードしたら、「node」フォルダに解凍して配置

<img width="211" height="254" alt="" src="https://aulta.co.jp/wp-content/uploads/2021/02/2021-02-21_11h12_43.png">

#### Node.jsのバージョン変更

**\batch\call\init.bat** をテキストエディタで開きます。

「node-v14.15.5-win-x64」の個所をダウンロードして解凍したNode.jsのフォルダ名に変更してください。

<img width="441" height="107" alt="" src="https://aulta.co.jp/wp-content/uploads/2021/02/2021-02-21_11h15_07.png">

※将来 Node.js のバージョンを変える時が来たら、ここを変更します。

### インストール

#### 01_npm-init.bat

**\batch\setup\01_npm-init.bat** をダブルクリックして実行します。

画面の指示に従っていろいろ入力していきます。

すべて未入力でEnterしていってもOKです。

最後に yes と入力し Enter

プロンプトが閉じます。

**package.json** が作成されます。

#### 02_npm-install-electron.bat

**\batch\setup\02_npm-install-electron.bat** をダブルクリックして実行します。

プロンプトが起動しいろいろ始まります。

完了したら自動的にプロンプトが閉じます。

**package-lock.json** と **node_modules** フォルダが作成されます。

#### 確認

ここまでで次のようになっています。

<img width="240" height="383" alt="" src="https://aulta.co.jp/wp-content/uploads/2021/02/2021-02-21_11h19_46.png">

### package.json の編集

**package.json** をエディタで開き、次のようにします。

main を main.js に変更します。

scripts / build を変更し、build はそのままコピペです。

他の部分は元のままでOKです。

```
{
  "name": "sample",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "build": "electron-builder"
  },
  "build": {
    "appId": "sample.sample.sample",
    "directories": {
      "app": ""
    },
    "win": {
      "target": {
        "target": "dir",
        "arch": [
          "x64"
        ]
      }
    },
    "mac": {
      "target": "dmg"
    }
  },
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "electron": "^11.3.0",
    "electron-builder": "^22.9.1"
  }
}
```


## デバッグ実行

**\batch\vscode.bat** をダブルクリックすると、Visual Studio Codeが起動します。

※Visual Studio Code は別途インストールしておいてください。

「ファイル」メニューから「フォルダーを開く」をクリック。

セットアップしたフォルダを選択して開きます。

**F5キー** を押して実行します。

お気づきだと思いますが、このまま Visual Studio Code でコーディングを進めていくこともできます。もちろんそれはそれでOKです。

## ビルド

**\batch\npm_build.bat** をダブルクリックすると、プロンプトが起動しビルドが始まります。

プロンプトが自動で閉じられたら完了です。

次のように **dist** フォルダが作成され **exe** が出来ています。

<img width="243" height="471" alt="" src="https://aulta.co.jp/wp-content/uploads/2021/02/2021-02-21_11h31_01.png">

## コーディング

アプリを作っていくうえで主に触るのは **index.html** と **index.js** です。

これ以上は、セットアップの範囲を超えるのでここでは触れません。

## 任意のコマンドを実行

普通に Win + r からの cmd でプロンプトを開いたのではパスが通ってないため npm などのコマンドが使えません。

**\batch\cmd.bat** をダブルクリックするとプロンプトが起動しますので、こちらを使います。

（実行例）npm install ...

## Licence

MIT License


## Author

[aulta](https://github.com/aulta) takashi shinohara

[https://aulta.co.jp/archives/8658](https://aulta.co.jp/archives/8658) ElectronをWindows10にセットアップ

