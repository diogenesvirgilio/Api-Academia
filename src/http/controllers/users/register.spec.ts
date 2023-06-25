import request from 'supertest'
import { afterAll, beforeAll, expect, describe, it } from 'vitest'
import { app } from '@/app'

describe('Register (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('Should be able to register', async () => {
    const response = await request(app.server).post('/users').send({
      name: 'Diógenes Virgilio',
      email: 'diogenesvirgilio@ymail.com',
      password: '123456',
    })

    expect(response.statusCode).toEqual(201)
  })
})
