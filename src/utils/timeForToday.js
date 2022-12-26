// 오늘을 기준으로 특정 날짜를 '방금전', '몇 시간 전', '몇 일전', '몇 년전'으로 표시
export function timeForToday(date) {
  const today = new Date();
  const timeValue = new Date(date);

  const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);

  if (betweenTime < 1) return '방금전';
  if (betweenTime < 60) return `${betweenTime}분전`;

  const betweenTimeHour = Math.floor(betweenTime / 60);

  if (betweenTimeHour < 24) return `${betweenTimeHour}시간전`;

  const betweenTimeDay = Math.floor(betweenTimeHour / 24);

  if (betweenTimeDay < 365) return `${betweenTimeDay}일전`;

  return `${Math.floor(betweenTimeDay / 365)}년전`;
}
