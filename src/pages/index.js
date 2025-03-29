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
            src="/img/Work1.png"
            alt="Profile1"
          />
          <h2>「Eon Companions」</h2>
          <p>私は「第十一回星新一賞」の世界観をもとにした双人協力ゲームを開発しました。本作の特徴は以下の通りです：

          ローカルネットワークを通じて、2人のプレイヤーがリアルタイムで連携し、多彩なスキルを駆使してステージのギミックや課題を攻略していきます。

          感情認識によるインタラクション
　        プレイヤーの表情から取得した感情データをゲーム内演出に反映し、より没入感のある体験を実現しています。  



AI対話システムの導入
　ChatGPTのファインチューニング版を用いたキャラクターとのリアルタイム対話により、物語性とプレイヤー間の協力性を高めました。</p>
        </div>

        <div className={styles.profileBlock}>
          {/* 或者继续用灰色占位，如果还没准备好图片 */}
          <img
            className={styles.circleImage}
            src="/img/Work2.png"
            alt="Profile1"
          />
          <h2>「Bot Rivalry」</h2>
          <p>私はSteamを基盤としたオンライン対戦型FPSゲームを開発しました。特徴は以下の通りです：

マルチプレイ対応：サーバーを通じたルーム作成・検索・参加機能を自作サブシステムで実装。

戦術スキルの活用：瞬間移動（Flash）、グラップリングフック、時間回溯（Time Rewind）など、多彩なアビリティで戦局に応じたプレイが可能。

武器バリエーション：スナイパー、ショットガン、アサルトライフルなどを用意し、遠・近距離戦をカバー。

プレイヤーは自分のプレイスタイルに合わせてスキルと武器を自由に組み合わせ、ダイナミックな戦略バトルを楽しめます。</p>
        </div>
      </div>
    </Layout>
  );
}
