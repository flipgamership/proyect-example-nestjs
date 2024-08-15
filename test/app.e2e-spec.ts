import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { response } from 'express';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});

describe('TaskController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/tasks (GET)', () => {
    return request(app.getHttpServer())
      .get('/tasks')
      .expect(200)
      .expect((response) => {
        expect(response.body).toBeInstanceOf(Array);
      });
  });

  it('/tasks/:id (GET)', async () => {
    // Primero, puedes insertar una tarea de prueba si es necesario
    const createdTask = await request(app.getHttpServer())
      .post('/tasks')
      .send({ title: 'Test Task', description: 'A test task' })
      .expect(201);

    const taskId = createdTask.body.id;

    // Ahora, hacemos la solicitud GET usando el id
    return request(app.getHttpServer())
      .get(`/tasks/${taskId}`)
      .expect(200)
      .expect((response) => {
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toBe(taskId);
        expect(response.body.title).toBe('Test Task');
      });
  });

  it('/tasks (POST)', async () => {
    return request(app.getHttpServer())
      .post('/tasks')
      .send({ title: 'Test Task', description: 'A test task' })
      .expect(201)
      .expect((response) => {
        expect(response.body).toBeInstanceOf(Object);
      });
  });

  it('/tasks/:id (PUT)', async () => {
    // Primero, creamos una tarea de prueba
    const createdTask = await request(app.getHttpServer())
      .post('/tasks')
      .send({ title: 'Original Task', description: 'Original description' })
      .expect(201);

    const taskId = createdTask.body.id;

    // Ahora, actualizamos la tarea
    const updatedTaskData = {
      title: 'Updated Task',
      description: 'Updated description',
    };

    const updatedTask = await request(app.getHttpServer())
      .put(`/tasks/${taskId}`)
      .send(updatedTaskData)
      .expect(200)
      .expect((response) => {
        expect(response.body).toBeInstanceOf(Object);
      });
    })

});
