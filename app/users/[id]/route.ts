import { users } from "../route";
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const user = users.find((user) => user.id === Number(id));
  return Response.json(user);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const user = users.find((user) => user.id === Number(id));
  if (!user) {
    return new Response(JSON.stringify({ error: "User not found" }), {
      status: 404,
    });
  }
  users.splice(users.indexOf(user), 1);
  return Response.json(user);
}
