import { InMemoryUserRepository } from "../../../src/repositories/in-memory/in-memory-user-repository";
import { LoginService } from "../../../src/services/login"
import { RegisterService } from "../../../src/services/register"
import { UserController } from "../../../src/controllers/user/user-controller"

const repository = new InMemoryUserRepository
const login = new LoginService(repository)
const register = new RegisterService(repository)

beforeEach( async() => {
    const user = await register.execute({
        name: "test",
        email: "email@test.com",
        password: "password",
        telephone: "123123123",
        height: 1.67,
        weight: 81.6 
    })
    console.log(user)
    return user
  });
  
afterEach( async () => {
    const userDeleted = await repository.delete()

    return userDeleted
});

describe("Test login service", () => {
    it("1) Should be generate a token", async () => {
        const userLogin = await login.execute({
            email: "email@test.com",
            password: "password", 
        })
        expect(userLogin.token).toEqual(String)
    })
})