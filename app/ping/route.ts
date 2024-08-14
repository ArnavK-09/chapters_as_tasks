export async function GET() {
  return Response.json(
    { message: new Date().toLocaleString() },
    {
      status: 200,
    },
  );
}
