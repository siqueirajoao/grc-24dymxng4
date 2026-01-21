CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  role TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow public insert to leads
CREATE POLICY "Allow public insert to leads"
ON leads FOR INSERT
TO public
WITH CHECK (true);

-- Allow authenticated users to view leads
CREATE POLICY "Allow authenticated view leads"
ON leads FOR SELECT
TO authenticated
USING (true);
