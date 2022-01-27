import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, DeleteResult, EntityManager, EntitySchema, FindConditions, FindManyOptions, FindOneOptions, InsertResult, ObjectID, QueryRunner, RemoveOptions, Repository, SaveOptions, UpdateResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { AppEntity } from '../entities';

import { BaseRepository } from './base.repository';

@Injectable()
export class AppRepository implements BaseRepository<AppEntity> {
}