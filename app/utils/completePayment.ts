export async function completePayment(router: any, clearCart: () => void) {
  const response = await fetch("http://localhost:3000/api/sepet", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      payment: true,
    }),
  });
  const result = await response.json();

  result.status && router.push("/siparis-sonuc");
  result.status && clearCart();
}
