# Calendar-App

カレンダーによるスケジュール管理アプリケーションです。様々なカラーテーマでカスタマイズしながら予定を管理できます。
![](public/assets/calendar_image.png)

### アプリケーションの利用

以下の手順でアプリケーションをセットアップ、利用してください。

#### 初期セットアップ

1. 拡張機能のインストール<br>
   `PHP Server`<br>
   `PHP Intelephense`
2. 環境変数の設定<br>
   ・ `.env`ファイルの作成

   ```
   cp .env.example .env
   ```

   ・ `APP_KEY`の発行

   ```
   php artisan key:generate
   ```

   ・ キャッシュのクリア

   ```
   php artisan config:clear
   ```

   ・ `.env`ファイルの編集<br>

   ```
   APP_KEY=your_issued_app_key
   DB_PASSWORD=your_database_password
   ```

3. PHP ライブラリのインストール
   ```
   composer install
   ```
4. 依存関係のインストール
   ```
   npm install
   ```
5. テーブルの作成
   ```
   # SQL query
   CREATE DATABASE calendar_app;
   # テーブルの作成
   php artisan migrate
   ```

#### アプリケーションの起動

1. サーバーの立ち上げ
   ```
   npm run dev
   ```
2. 開発サーバーの起動
   ```
   php artisan serve
   ```
