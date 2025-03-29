---
id: intro
title: Work Introduce
---


# Project Introduction

## 「Eon Companions」作品紹介

### Project Overview

私は 第十一回星新一賞 を基にした 双人協力ゲーム を開発しました。本作は C++ と Unreal Engine を使用し、プレイヤーは 科学者 と ロボット に分かれ、スキルを活用しながら協力し、目的地を目指します。また、本作は 『五億年越しのパートナーシップ』 のビジュアル化を実現しています。

本ゲームの主な特徴は以下の通りです： 1LAN接続による双人協力プレイ ローカルネットワークを利用し、プレイヤー同士がリアルタイムで操作・スキルを駆使しながら、様々なゲーム内課題を解決できます。 2 感情認識システムの導入 ゲーム内でプレイヤーのリアルタイムの感情データを取得し、インタラクションに反映 することで、より没入感のある体験を提供します。 3 AIを活用した対話システム ChatGPTのFine-Tunedバージョン を活用し、プレイヤーがゲーム内のキャラクターとリアルタイムで対話できる仕組みを実装しました。これにより、協力プレイがより個性的で豊かなものとなります。

### **Project Modules：**

1. Emotion-Driven Animation Modules
2. Unreal Engine ChatGPT Integration Module
3. UE LAN Pairing Gameplay Module
4. MultiplayerGlide/Ice/MagAbilityModule

## 「Bot Rivalry」作品紹介

### Project Overview

私はSteamを基盤とした対戦型FPSゲームを開発しました。本作はオンラインマルチプレイ向けに設計され、プレイヤーはスキルと武器を駆使して戦略的な対戦を楽しめます。瞬間移動（テレポート）、グラップリングフック、時間回溯（タイムリワインド）などの戦術スキルを活用し、戦況に応じた柔軟な戦略が可能です。武器もスナイパーライフル、ショットガン、アサルトライフルなど多彩に揃え、遠距離・近距離戦闘のバランスを考慮しています。プレイヤーは自身のプレイスタイルに応じて最適なスキルと武器を組み合わせ、ダイナミックな戦闘を楽しめます。

本作では、プレイヤーがテレポート、グラップリングフック、タイムリワインドなどの戦術スキルを駆使し、戦況に応じた柔軟な戦略を展開できます。武器もスナイパーライフル、ショットガン、アサルトライフルなど多彩に揃え、遠距離・近距離戦闘のバランスを考慮しました。

開発においては、RPCを用いたフレーム同期技術やSteamのOnlineSubsystem接続を活用し、スキルの安定した動作を実現しました。特にタイムリワインドでは、過去の状態を正確に記録・復元しつつ、オンライン環境での同期と一貫性を維持することが課題でした。

### **Project Modules：**

1. MultiplayerSessionMenuModule
2. MultiplayerWeaponModule
3. MultiplayerPickupModule
4. MultiplayerTimeRecover/Grapple/FlashAbilityModule

