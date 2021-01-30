export default function (videoId: string, description: string): string | false {
  // DELTARUNE 関係
  if (['_QqKrxrH918', '9FciKdNwyDQ'].includes(videoId)) return false;

  const replaced = description
    .replace(/(?:🍀|♪)?.+(?:：|:)\s*https?:\/\/.+/g, '')
    .replace(/ ----------------------------------/g, '')
    .split('曲：')[0]
    .split('Musics:')[0]
    .split('今日のゲーム：')[0]
    .split('今回のゲーム：')[0]
    .split('ゲームについて：')[0]
    .split('#のばまん')[0]
    .split('#スマブラSP')[0]
    .split('・Nyan Cat')[0]
    .split('🍀のばまんスタンプ：')[0]
    .split('もくじ')[0]
    .split('【目次】')[0]
    .split('Supported by Google Play\n')[0]
    .split('Sponsored by ガレリア\n')[0]
    .split('提供：')[0]
    .split('リファレンス\n')[0]
    .split('使用機材：ガレリア')[0]
    .replace(/----------------------------------/g, '')
    .replace(/\r/g, '')
    .replace(/\n{2,}/g, '\n')
    .replace(/^\n/, '')
    .replace(/\n$/, '');

  const sanitized = replaced.replace(/\n/g, '<br>');

  return sanitized === '' ? '（なし）' : sanitized;
}
