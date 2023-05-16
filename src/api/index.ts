export const getConversionRate = async (
  from: string,
  to: string,
  amount = 1
) => {
  const headers = new Headers();
  headers.append("apikey", "RGM8MNGJUCxZ3h6hCENshLyIUTCz8gIx");

  const res = await fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    {
      method: "GET",
      redirect: "follow",
      headers: headers,
    }
  );

  return res.json();
};
