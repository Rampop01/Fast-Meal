export default function RegisterPage() {
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
      <form className="block max-w-xs mx-auto">
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Register</button>
        <div className="my-4 text-center text-gray-500">
          or Login with provider
        </div>
        <button className="flex gap-4 justify-center">
          {" "}
          <img
            src="/google-trans-icon.jpeg"
            alt="google-icon"
            width={24}
            height={24}
          />{" "}
          Login with google
        </button>
      </form>
    </section>
  );
}
