-- Cuida — Simulador de trabajo de cuidado no remunerado
-- Tabla de resultados + política de seguridad (RLS)
--
-- Correr este script completo en Supabase → SQL Editor → New query → Run.

create table if not exists public.results (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  -- identificación en texto libre, sin verificar (spec: sin login ni cuenta)
  name text not null,

  -- detalle completo del ejercicio (vista 1 y vista 2)
  hours jsonb not null,
  matrix jsonb not null,

  -- totales ya calculados en pantalla (vista 3), guardados tal cual se mostraron
  gross_hours numeric not null,
  net_hours numeric not null,
  overlap_hours numeric not null,
  double_jornada_hours numeric not null,
  monthly_value numeric not null,
  annual_value numeric not null
);

comment on table public.results is 'Un resultado completo del simulador, identificado por el nombre en texto libre que la persona escribió en la vista 1. No se cruza con el backend institucional de la Fundación.';

alter table public.results enable row level security;

-- Cualquiera puede insertar un resultado (no hay login). No hay política de lectura:
-- la app nunca necesita leer resultados de vuelta, así que nadie puede consultar la tabla desde el cliente.
create policy "public insert results"
  on public.results
  for insert
  to anon
  with check (true);
