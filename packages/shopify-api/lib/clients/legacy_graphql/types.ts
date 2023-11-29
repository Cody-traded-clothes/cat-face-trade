import {ApiVersion} from '../../types';
import {Session} from '../../session/session';
import {PostRequestParams} from '../http_client/types';

export type GraphqlParams = Omit<PostRequestParams, 'path' | 'type'>;

export interface GraphqlClientParams {
  session: Session;
  apiVersion?: ApiVersion;
}
