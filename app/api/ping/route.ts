export async function GET(request: Request) {
  return Response.json(
    { message: new Date().toLocaleString() },
    {
      status: 200,
    },
  );
}
