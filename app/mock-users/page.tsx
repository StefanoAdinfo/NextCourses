//aggiorna automaticamente la pagina
import { revalidatePath } from "next/cache";

type MockUser = {
  id: number;
  name: string;
};

export default async function MockUsers() {
  const response = await fetch(
    "https://67518526d1983b9597b33589.mockapi.io/users"
  );
  const users = await response.json();
  async function addUser(formData: FormData) {
    // esso serve per farlo funzionare solo sul server side evitando che gli utenti possano farlo
    "use server";
    const name = formData.get("name");
    const res = await fetch(
      "https://67518526d1983b9597b33589.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //   Authorization: `Bearer ${process.env.MOCK_API_KEY}`,
        },
        body: JSON.stringify({ name }),
      }
    );
    const newUsers = await res.json();
    revalidatePath("/mock-users");
    console.log(newUsers);
  }

  return (
    <div>
      <h1>Mock Users</h1>
      <div className="py-10">
        <form action={addUser}>
          <input type="text" name="name" placeholder="Name" />
          <button type="submit">Submit</button>
        </form>
      </div>
      <ul>
        {users.map((user: MockUser) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
