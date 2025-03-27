import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="こんにちは、YUです"
      description="这是一个自定义首页示例"
    >
      <div className={styles.heroSection}>
        {/* heroSection内部，我们做一个左右布局：左文字+右图片 */}
        <div className={styles.heroInner}>
          {/* 左边文字 */}
          <div className={styles.heroText}>
            <h1 className={styles.mainTitle}>こんにちは、YUです</h1>
            <p className={styles.subTitle}>  独学を通じてメディア制作全般を学び、自分の興味に沿った作品を制作してきました。新しい技術を積極的に習得し、それを表現や制作に活かすことを大切にしています。

今後は、これまで培った知識をゲーム分野に応用し、インタラクティブメディアの新たな可能性を探求していきたいと考えています。ポートフォリオをご覧いただきありがとうございます。まだ未熟な点もあるかと思いますが、ご指導のほどよろしくお願いいたします。</p>
          </div>

          {/* 右边圆形图，可以在CSS里指定真实图片 */}
          <div className={styles.heroImage}></div>
        </div>
      </div>

      {/* 下方两个区块 */}
      <div className={styles.contentSection}>
        <div className={styles.profileBlock}>
          {/* 在这里放置 docusaurus-social-card 图片 */}
          <img
            className={styles.circleImage}
            src="/img/docusaurus-social-card.jpg"
            alt="Profile1"
          />
          <h2>「Eon Companions」</h2>
          <p>私は 第十一回星新一賞 を基にした 双人協力ゲーム を開発しました。本ゲームの主な特徴は以下の通りです： 1LAN接続による双人協力プレイ ローカルネットワークを利用し、プレイヤー同士がリアルタイムで操作・スキルを駆使しながら、様々なゲーム内課題を解決できます。 2 感情認識システムの導入 ゲーム内でプレイヤーのリアルタイムの感情データを取得し、インタラクションに反映 することで、より没入感のある体験を提供します。 3 AIを活用した対話システム ChatGPTのFine-Tunedバージョン を活用し、プレイヤーがゲーム内のキャラクターとリアルタイムで対話できる仕組みを実装しました。これにより、協力プレイがより個性的で豊かなものとなります。</p>
        </div>

        <div className={styles.profileBlock}>
          {/* 或者继续用灰色占位，如果还没准备好图片 */}
          <img
            className={styles.circleImage}
            src="/img/docusaurus-social-card.jpg"
            alt="Profile1"
          />
          <h2>「Bot Rivalry」</h2>
          <p>私はSteamを基盤とした対戦型FPSゲームを開発しました。本作はオンラインマルチプレイ向けに設計され、プレイヤーはスキルと武器を駆使して戦略的な対戦を楽しめます。瞬間移動（テレポート）、グラップリングフック、時間回溯（タイムリワインド）などの戦術スキルを活用し、戦況に応じた柔軟な戦略が可能です。武器もスナイパーライフル、ショットガン、アサルトライフルなど多彩に揃え、遠距離・近距離戦闘のバランスを考慮しています。プレイヤーは自身のプレイスタイルに応じて最適なスキルと武器を組み合わせ、ダイナミックな戦闘を楽しめます。</p>
        </div>
      </div>
    </Layout>
  );
}
