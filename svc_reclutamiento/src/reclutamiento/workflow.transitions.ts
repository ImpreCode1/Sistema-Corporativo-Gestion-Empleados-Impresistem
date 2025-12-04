import { EstadoRequisicion } from '@prisma/client';

export const ALLOWED_TRANSITIONS: Record<
  EstadoRequisicion,
  EstadoRequisicion[]
> = {
  pendiente: ['en_revision', 'rechazada'],
  en_revision: ['aprobada', 'rechazada'],
  aprobada: ['publicada'],
  publicada: ['cerrada'],
  cerrada: [], // no permite ningún cambio
  rechazada: [], // también fin del flujo
};
