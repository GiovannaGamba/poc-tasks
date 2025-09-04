
import { Typography } from "../components/Typography/Typhography";

export function Colors() {
  return (
    <div className="min-h-screen bg-neutral-50 p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center">
          <Typography variant="heading-1" component="h1">
            Sistema de Tipografia
          </Typography>
          <Typography variant="body-2" className="text-neutral-600 mt-4">
            Baseado na fonte Inter com variantes padronizadas para todo o sistema
          </Typography>
        </div>

        {/* Headings */}
        <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200">
          <Typography variant="heading-2" component="h2" className="mb-6">
            Headings (Títulos)
          </Typography>
          <div className="space-y-4">
            <Typography variant="heading-1" component="h1">
              Heading 1 - Título Principal (36px, 600, 48px)
            </Typography>
            <Typography variant="heading-2" component="h2">
              Heading 2 - Subtítulo (24px, 600, 32px)
            </Typography>
            <Typography variant="heading-3" component="h3">
              Heading 3 - Título Menor (18px, 600, 24px)
            </Typography>
          </div>
        </section>

        {/* Titles */}
        <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200">
          <Typography variant="heading-2" component="h2" className="mb-6">
            Titles (Títulos de Seção)
          </Typography>
          <div className="space-y-4">
            <Typography variant="title-1" component="h4">
              Title 1 - Título Semi Bold (16px, 600, 22px)
            </Typography>
            <Typography variant="title-2" component="h5">
              Title 2 - Título Regular (16px, 400, 22px)
            </Typography>
          </div>
        </section>

        {/* Body */}
        <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200">
          <Typography variant="heading-2" component="h2" className="mb-6">
            Body (Texto do Corpo)
          </Typography>
          <div className="space-y-4">
            <Typography variant="body-1" component="p">
              Body 1 - Texto Bold (14px, 700, 20px, 0.2%)
            </Typography>
            <Typography variant="body-2" component="p">
              Body 2 - Texto Medium (14px, 500, 20px, 0.2%)
            </Typography>
            <Typography variant="body-3" component="p">
              Body 3 - Texto Regular (14px, 400, 20px, 0.2%)
            </Typography>
          </div>
        </section>

        {/* Captions */}
        <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200">
          <Typography variant="heading-2" component="h2" className="mb-6">
            Captions (Legendas)
          </Typography>
          <div className="space-y-4">
            <Typography variant="caption-1" component="span">
              Caption 1 - Legenda Bold (12px, 700, 18px, 0.2%)
            </Typography>
            <Typography variant="caption-2" component="span">
              Caption 2 - Legenda Medium (12px, 500, 18px, 0.2%)
            </Typography>
          </div>
        </section>

        {/* Details */}
        <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200">
          <Typography variant="heading-2" component="h2" className="mb-6">
            Details (Detalhes)
          </Typography>
          <div className="space-y-4">
            <Typography variant="detail-1" component="span">
              Detail 1 - Detalhe Bold (10px, 700, 16px, 0.3%)
            </Typography>
            <Typography variant="detail-2" component="span">
              Detail 2 - Detalhe Medium (10px, 500, 16px, 0.3%)
            </Typography>
          </div>
        </section>

        {/* Uso Prático */}
        <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200">
          <Typography variant="heading-2" component="h2" className="mb-6">
            Exemplo de Uso Prático
          </Typography>
          <div className="space-y-6">
            <div>
              <Typography variant="title-1" component="h3" className="mb-2">
                Card de Usuário
              </Typography>
              <div className="bg-neutral-100 p-4 rounded-lg">
                <Typography variant="body-2" component="p" className="mb-2">
                  Este é um exemplo de como usar o sistema de tipografia em um card real.
                </Typography>
                <div className="flex items-center gap-2">
                  <Typography variant="caption-1" component="span">
                    Status:
                  </Typography>
                  <Typography variant="caption-2" component="span" className="text-success-500">
                    Ativo
                  </Typography>
                </div>
                <Typography variant="detail-2" component="span" className="text-neutral-500 block mt-2">
                  Criado em: 15/01/2024
                </Typography>
              </div>
            </div>
          </div>
        </section>

        {/* Classes CSS */}
        <section className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200">
          <Typography variant="heading-2" component="h2" className="mb-6">
            Classes CSS Disponíveis
          </Typography>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Typography variant="title-2" component="h4" className="mb-3">
                Variantes
              </Typography>
              <div className="space-y-1">
                <Typography variant="body-3" component="code" className="bg-neutral-100 px-2 py-1 rounded text-xs">
                  text-heading-1
                </Typography>
                <Typography variant="body-3" component="code" className="bg-neutral-100 px-2 py-1 rounded text-xs">
                  text-heading-2
                </Typography>
                <Typography variant="body-3" component="code" className="bg-neutral-100 px-2 py-1 rounded text-xs">
                  text-title-1
                </Typography>
                <Typography variant="body-3" component="code" className="bg-neutral-100 px-2 py-1 rounded text-xs">
                  text-body-2
                </Typography>
                <Typography variant="body-3" component="code" className="bg-neutral-100 px-2 py-1 rounded text-xs">
                  text-caption-1
                </Typography>
              </div>
            </div>
            <div className="space-y-2">
              <Typography variant="title-2" component="h4" className="mb-3">
                Fonte
              </Typography>
              <div className="space-y-1">
                <Typography variant="body-3" component="code" className="bg-neutral-100 px-2 py-1 rounded text-xs">
                  font-inter
                </Typography>
                <Typography variant="body-3" component="code" className="bg-neutral-100 px-2 py-1 rounded text-xs">
                  font-sans
                </Typography>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
