export async function getPiWalletBalance(wallet: string): Promise<number> {
  // Simulate Pi API response
  return new Promise((resolve) => {
    setTimeout(() => resolve(314.15), 1000); // return fake balance after 1s
  });
}