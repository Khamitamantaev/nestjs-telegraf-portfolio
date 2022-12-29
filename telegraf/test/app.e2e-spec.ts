import { Types } from 'mongoose';
import { CreateReviewDto } from './../src/review/dto/create-review.dto';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
const productId = new Types.ObjectId().toHexString()
;describe('AppController (e2e)', () => {
	let app: INestApplication;
	let createdId: string;
	const testReviewDto: CreateReviewDto = {
		name: 'name',
		title: 'title',
		description: 'description',
		rating: 1,
		productId
	}
;
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

	// it('/review/create (POST)', async (done) => {
		
	// 	return request(await app.getHttpServer()).post('/review/create').send(testReviewDto).expect(201).then(({ body }: request.Response) => {
	// 		createdId = body._id
	// 		 expect(createdId).toBeDefined()
	// 		 done();
	// 	})
	// })	
});
