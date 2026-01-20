CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT,
    company TEXT,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert"
ON public.leads
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Allow authenticated select"
ON public.leads
FOR SELECT
TO authenticated
USING (true);
