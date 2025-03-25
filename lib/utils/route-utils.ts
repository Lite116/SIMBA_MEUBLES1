import { PackType } from '@/lib/types';

export const VALID_PACK_TYPES: PackType[] = ['duo', 'trio'];

export function generatePackTypeParams() {
  return VALID_PACK_TYPES.map(type => ({ type }));
}