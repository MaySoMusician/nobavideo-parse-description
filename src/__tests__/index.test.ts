/* eslint-disable no-irregular-whitespace */

import parse from '../index';

test('Normal description', () => {
  const original = `Q.このゲームの作者の気持ちを答えよ
A.全体的に意味がわからない



🍀チャンネル登録：
http://bit.ly/nobamantouroku

🍀メンバーシップ：
https://www.youtube.com/channel/UCTW2tw0Mhho72MojB1L48IQ/join

🍀ツイッター:
 https://twitter.com/nobamangames

🍀のばまんインスタ：
https://www.instagram.com/nobamangames/

🍀のばまんグッズ：
https://muuu.com/videos/9258f6c0281204e4

🍀のばまんスタンプ：
１．https://store.line.me/stickershop/product/8418677
２．https://store.line.me/stickershop/product/12479029



 ----------------------------------


🍀他ののばまんの動画：https://www.youtube.com/playlist?list=PLRMiVqWc2s4ogHj5it6tWES5o0BTyqGGG

🍀のばまん実況：https://www.youtube.com/playlist?list=PLRMiVqWc2s4rD34wBZjXVUlWlh0Mou-dv


 ----------------------------------


#のばまん #シミュレーションゲーム #ゲーム`;
  expect(parse('XetBGNL8KMQ', original)).toBe(
    'Q.このゲームの作者の気持ちを答えよ<br>A.全体的に意味がわからない'
  );
});

test("Don't parse text regarding DELTARUNE", () => {
  const original = `Twitter: https://twitter.com/nobamangames
Music:
・MYTK - Avwelzism a Uwbpmz 
・コルソン - Spider Swing Show! 
https://soundcloud.com/ut_underveil/sets/uvechoes

デルタルーンをプレイしていれば必ず考える、このゲームはアンダーテール２なのか、アンダーテールのプリクエルなのか、それともアンダーテールとは全く別の世界のリック・アンド・モーティ的な話なのかという疑問について考察しています。
このふたつのゲームをつなげる要素はかなりいろいろな所に散らばっており、今回はその要素についてまとめています。

デルタルーンについて話すことは特にもうないので次回はスマブラのトリビアについての動画でも作ろうかと思います。やる気が出たら…`;
  expect(parse('_QqKrxrH918', original)).toBe(false);
});

test("Return '（なし）' if the result is empty", () => {
  const original = `Supported by Google Play
Brain Dots 2 (ブレインドッツ2)はこちら→
https://play.google.com/store/apps/details?id=jp.co.translimit.bd2&hl=ja


アンケートはこちら→
https://forms.gle/6wA9BEKYiDZcTD9r8


【Google Play Gaming Week】視聴者と YouTube クリエイターが一緒にゲームを遊ぶ、ユーザー参加型企画！9/28 (月) ~ 10/4 (日) 毎日21時からライブ配信！

詳しくはこちら→ 
https://events.withgoogle.com/gamingweek-jp/


#sponsored #ad #GooglePlayAd`;
  expect(parse('MZUApzP8AgE', original)).toBe('（なし）');
});

test('20201113', () => {
  const original = `改造は危険危険



----------------------------------
使用機材：ガレリア（​ゲーミングPC​）
ガレリアについては下記からチェック​！
https://onl.tw/5wDZzf9
 ----------------------------------
🍀チャンネル登録：
http://bit.ly/nobamantouroku

🍀メンバーシップ：
https://www.youtube.com/channel/UCTW2...

🍀ツイッター:
 https://twitter.com/nobamangames

🍀のばまんインスタ：
https://www.instagram.com/nobamangames/

🍀のばまんグッズ：
https://muuu.com/videos/9258f6c0281204e4

🍀のばまんスタンプ：
１．https://store.line.me/stickershop/pro...
２．https://store.line.me/stickershop/pro...

 ----------------------------------


🍀他ののばまんの動画：https://www.youtube.com/playlist?list...

🍀のばまん実況：https://www.youtube.com/playlist?list...


 ----------------------------------


#のばまん #シミュレーションゲーム #ゲーム`;
  expect(parse('2Qa8ooCiHFg', original)).toBe('改造は危険危険');
});
