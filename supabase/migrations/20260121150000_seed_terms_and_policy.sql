-- Create policy to allow public read access to policies table
ALTER TABLE public.policies ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public select on policies" ON public.policies;

CREATE POLICY "Allow public select on policies"
ON public.policies
FOR SELECT
TO anon, authenticated
USING (true);

-- Insert Terms of Use content
INSERT INTO public.policies (title, version, responsible_area, content)
VALUES (
  'Termos de Uso',
  '1.0',
  'Jurídico',
  $$
<div class="space-y-8 text-zinc-300 leading-relaxed text-lg text-justify">
  <section>
    <h2 class="text-xl font-semibold text-white mb-3">1. OBJETO E FINALIDADE DA PLATAFORMA</h2>
    <p class="mb-2"><strong>1.1.</strong> O LAWYN é uma plataforma tecnológica de <strong>apoio à gestão de governança, riscos, conformidade regulatória, controles internos, auditorias, dados pessoais e indicadores regulatórios</strong>, fornecendo recursos como organização de informações, acompanhamento de prazos, registros, relatórios e fluxos operacionais.</p>
    <p class="mb-2"><strong>1.2.</strong> O LAWYN <strong>não substitui</strong> a atuação humana, técnica ou especializada, nem elimina a necessidade de equipes internas, consultores, advogados, auditores, profissionais de compliance ou gestores de risco.</p>
    <p class="mb-2"><strong>1.3.</strong> A Plataforma atua como <strong>ferramenta de suporte</strong>, não constituindo serviço de consultoria jurídica, regulatória, contábil, financeira ou de auditoria.</p>
  </section>

  <section>
    <h2 class="text-xl font-semibold text-white mb-3">2. LIMITAÇÕES DE RESPONSABILIDADE REGULATÓRIA</h2>
    <p class="mb-2"><strong>2.1.</strong> A Lawyn fornece ferramentas para auxiliar na tomada de decisões e na gestão de conformidade, mas <strong>não substitui o julgamento profissional, consultoria jurídica ou auditoria externa</strong>.</p>
    <p class="mb-2"><strong>2.2.</strong> A Lawyn <strong>não se responsabiliza por multas, sanções regulatórias, processos administrativos ou perdas financeiras</strong> decorrentes de decisões tomadas com base nas informações da plataforma, sendo a <strong>responsabilidade final da instituição usuária garantir o cumprimento das normas aplicáveis</strong>.</p>
  </section>

  <section>
    <h2 class="text-xl font-semibold text-white mb-3">3. ATUAÇÃO HUMANA E TOMADA DE DECISÃO</h2>
    <p class="mb-2"><strong>3.1.</strong> Embora a plataforma utilize algoritmos e automações para processar dados e sugerir classificações de risco, a <strong>supervisão humana é indispensável</strong>.</p>
    <p class="mb-2"><strong>3.2.</strong> O usuário reconhece que a <strong>interpretação de normas, a validação de controles e a avaliação final de riscos</strong> devem ser realizadas por profissionais qualificados da sua organização, cabendo a eles a decisão final sobre quaisquer ações tomadas.</p>
  </section>

  <section>
    <h2 class="text-xl font-semibold text-white mb-3">4. DISPONIBILIDADE, ESTABILIDADE E CONTINUIDADE</h2>
    <p class="mb-2"><strong>4.1.</strong> Empenhamos nossos melhores esforços para garantir uma <strong>disponibilidade de 99,9% (SLA)</strong> da plataforma, bem como sua estabilidade e continuidade operacional.</p>
    <p class="mb-2"><strong>4.2.</strong> No entanto, <strong>interrupções podem ocorrer</strong> para manutenção programada, atualizações de segurança ou eventos de força maior. A Lawyn não garante que o serviço será ininterrupto ou livre de erros em 100% do tempo, mas atuará prontamente para mitigar quaisquer indisponibilidades.</p>
  </section>

  <section>
    <h2 class="text-xl font-semibold text-white mb-3">5. DADOS, INFORMAÇÕES E CONTEÚDOS</h2>
    <p class="mb-2"><strong>5.1.</strong> A <strong>propriedade dos dados, informações e conteúdos</strong> inseridos na plataforma é exclusiva do Cliente.</p>
    <p class="mb-2"><strong>5.2.</strong> A Lawyn atua como <strong>operadora desses dados</strong>, garantindo sua confidencialidade, integridade e disponibilidade através de backups regulares e criptografia de ponta a ponta.</p>
    <p class="mb-2"><strong>5.3.</strong> <strong>Não comercializamos ou compartilhamos seus dados</strong> com terceiros sem autorização expressa, exceto quando necessário para a prestação do serviço ou cumprimento legal.</p>
  </section>

  <section>
    <h2 class="text-xl font-semibold text-white mb-3">6. LGPD E PROTEÇÃO DE DADOS</h2>
    <p class="mb-2"><strong>6.1.</strong> A Lawyn está em <strong>conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)</strong>. Adotamos medidas técnicas e administrativas para proteger os dados pessoais tratados na plataforma.</p>
    <p class="mb-2"><strong>6.2.</strong> O Cliente, na qualidade de <strong>Controlador</strong>, é responsável por garantir que possui as bases legais adequadas para a inserção de dados pessoais de terceiros no sistema e pelos direitos dos titulares desses dados.</p>
  </section>

  <section>
    <h2 class="text-xl font-semibold text-white mb-3">7. AUDITORIAS, RELATÓRIOS E INDICADORES</h2>
    <p class="mb-2"><strong>7.1.</strong> Reconhecemos a necessidade de auditorias por parte de reguladores e auditorias internas. A Lawyn se compromete a <strong>fornecer os relatórios SOC 2 Type II e logs de acesso</strong> quando solicitados, além de cooperar com processos de due diligence.</p>
    <p class="mb-2"><strong>7.2.</strong> Os <strong>relatórios e indicadores gerados pela plataforma</strong> refletem os dados inseridos pelo usuário e devem ser validados conforme os procedimentos internos da instituição.</p>
  </section>

  <section>
    <h2 class="text-xl font-semibold text-white mb-3">8. PROPRIEDADE INTELECTUAL</h2>
    <p class="mb-2"><strong>8.1.</strong> Todo o <strong>código-fonte, design, logotipos, marcas e metodologias</strong> presentes na plataforma são propriedade exclusiva da Lawyn ou de seus licenciadores.</p>
    <p class="mb-2"><strong>8.2.</strong> O uso da plataforma <strong>não confere ao Cliente qualquer direito de propriedade intelectual</strong> sobre o software, exceto a licença de uso limitada, não exclusiva e revogável conforme os termos contratados.</p>
  </section>

  <section>
    <h2 class="text-xl font-semibold text-white mb-3">9. USO INDEVIDO E SUSPENSÃO</h2>
    <p class="mb-2"><strong>9.1.</strong> É <strong>estritamente proibido utilizar a plataforma para fins ilegais</strong>, tentar violar a segurança do sistema, realizar engenharia reversa, ou sobrecarregar a infraestrutura (DDoS).</p>
    <p class="mb-2"><strong>9.2.</strong> A Lawyn se reserva o direito de <strong>suspender ou cancelar o acesso</strong> de usuários que violem estas regras de segurança e conduta, visando proteger a integridade da plataforma e dos demais usuários.</p>
  </section>

  <section>
    <h2 class="text-xl font-semibold text-white mb-3">10. ALTERAÇÕES DOS TERMOS</h2>
    <p class="mb-2"><strong>10.1.</strong> A Lawyn pode <strong>atualizar estes Termos de Uso periodicamente</strong> para refletir mudanças na legislação ou na plataforma. Alterações substanciais serão notificadas aos usuários com antecedência.</p>
    <p class="mb-2"><strong>10.2.</strong> O <strong>uso continuado da plataforma</strong> após as alterações implica na aceitação dos novos termos e condições estabelecidos.</p>
  </section>

  <section>
    <h2 class="text-xl font-semibold text-white mb-3">11. COOKIES E TECNOLOGIAS SEMELHANTES</h2>
    <p class="mb-2"><strong>11.1.</strong> Utilizamos <strong>cookies essenciais para autenticação e segurança</strong>, além de cookies analíticos para melhorar a experiência do usuário.</p>
    <p class="mb-2"><strong>11.2.</strong> O usuário pode <strong>gerenciar suas preferências de cookies</strong> através das configurações do navegador, mas o bloqueio de cookies essenciais pode impedir o funcionamento correto da plataforma.</p>
  </section>

  <section>
    <h2 class="text-xl font-semibold text-white mb-3">12. LEGISLAÇÃO E FORO</h2>
    <p class="mb-2"><strong>12.1.</strong> Estes Termos são regidos e interpretados de acordo com as <strong>leis da República Federativa do Brasil</strong>.</p>
    <p class="mb-2"><strong>12.2.</strong> Fica eleito o <strong>Foro da Comarca de São Paulo, Estado de São Paulo</strong>, como o único competente para dirimir quaisquer controvérsias oriundas destes Termos.</p>
    <p class="mb-2"><strong>12.3.</strong> As partes <strong>renunciam expressamente a qualquer outro foro</strong>, por mais privilegiado que seja.</p>
  </section>
</div>
$$
);
