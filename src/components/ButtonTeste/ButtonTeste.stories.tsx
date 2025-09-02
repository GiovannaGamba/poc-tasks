import type { Meta, StoryObj } from '@storybook/react'
import { ButtonTeste } from './ButtonTeste'
import { CheckIcon } from '../icons/CheckIcon'

const meta = {
  title: 'Components/ButtonTeste',
  component: ButtonTeste,
  args: { text: 'Button', type: 'primary', style: 'filled', size: 'medium', state: 'enabled', showIconLeft: true, showIconRight: true },
  argTypes: {
    type: { control: 'radio', options: ['primary', 'danger', 'success'] },
    style: { control: 'radio', options: ['filled', 'outlined', 'ghost'] },
    size: { control: 'radio', options: ['medium', 'small'] },
    state: { control: 'radio', options: ['enabled', 'hover', 'disabled'] },
    disabled: { control: 'boolean' },
    showIconLeft: { control: 'boolean' },
    showIconRight: { control: 'boolean' },
    iconLeft: { control: false },
    iconRight: { control: false },
    text: { control: 'text' },
  },
} satisfies Meta<typeof ButtonTeste>
export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    iconLeft: <CheckIcon />,
    iconRight: <CheckIcon />,
  },
}

function HeaderRow() {
  return (
    <div className="grid grid-cols-[160px_1fr_1fr_1fr] items-center gap-6 mb-6">
      <div />
      <div className="text-center text-neutral-600 font-medium">Enabled</div>
      <div className="text-center text-neutral-600 font-medium">Hover</div>
      <div className="text-center text-neutral-600 font-medium">Disabled</div>
    </div>
  )
}

function SizeRow({ label, render }: { label: string; render: () => React.ReactNode }) {
  return (
    <div className="grid grid-cols-[160px_1fr_1fr_1fr] items-center gap-6 mb-6">
      <div className="text-neutral-700">{label}</div>
      {render()}
    </div>
  )
}

export const Matrix: Story = {
  render: (args) => (
    <div className="space-y-12">
      {([
        { type: 'primary', title: 'Primary' },
        { type: 'danger', title: 'Danger' },
        { type: 'success', title: 'Success' },
      ] as const).map((block) => (
        <div key={block.type}>
          <div className="text-neutral-900 font-semibold text-lg mb-4">{block.title}</div>
          <HeaderRow />

          {/* Medium */}
          <SizeRow
            label="Medium"
            render={() => (
              <>
                <div className="flex flex-col gap-3 items-center">
                  <ButtonTeste {...args} type={block.type} size="medium" style="filled" state="enabled" iconLeft={<CheckIcon />} iconRight={<CheckIcon />} />
                  <ButtonTeste {...args} type={block.type} size="medium" style="outlined" state="enabled" iconLeft={<CheckIcon />} iconRight={<CheckIcon />} />
                  <ButtonTeste {...args} type={block.type} size="medium" style="ghost" state="enabled" iconLeft={<CheckIcon />} iconRight={<CheckIcon />} />
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <ButtonTeste {...args} type={block.type} size="medium" style="filled" state="hover" iconLeft={<CheckIcon />} iconRight={<CheckIcon />} />
                  <ButtonTeste {...args} type={block.type} size="medium" style="outlined" state="hover" iconLeft={<CheckIcon />} iconRight={<CheckIcon />} />
                  <ButtonTeste {...args} type={block.type} size="medium" style="ghost" state="hover" iconLeft={<CheckIcon />} iconRight={<CheckIcon />} />
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <ButtonTeste {...args} type={block.type} size="medium" style="filled" state="disabled" iconLeft={<CheckIcon />} iconRight={<CheckIcon />} />
                  <ButtonTeste {...args} type={block.type} size="medium" style="outlined" state="disabled" iconLeft={<CheckIcon />} iconRight={<CheckIcon />} />
                  <ButtonTeste {...args} type={block.type} size="medium" style="ghost" state="disabled" iconLeft={<CheckIcon />} iconRight={<CheckIcon />} />
                </div>
              </>
            )}
          />

          {/* Small */}
          <SizeRow
            label="Small"
            render={() => (
              <>
                <div className="flex flex-col gap-3 items-center">
                  <ButtonTeste {...args} type={block.type} size="small" style="filled" state="enabled" iconLeft={<CheckIcon />} iconRight={<CheckIcon />} />
                  <ButtonTeste {...args} type={block.type} size="small" style="outlined" state="enabled" iconLeft={<CheckIcon />} iconRight={<CheckIcon />} />
                  <ButtonTeste {...args} type={block.type} size="small" style="ghost" state="enabled" iconLeft={<CheckIcon />} iconRight={<CheckIcon />} />
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <ButtonTeste {...args} type={block.type} size="small" style="filled" state="hover" iconLeft={<CheckIcon />} iconRight={<CheckIcon />} />
                  <ButtonTeste {...args} type={block.type} size="small" style="outlined" state="hover" iconLeft={<CheckIcon />} iconRight={<CheckIcon />} />
                  <ButtonTeste {...args} type={block.type} size="small" style="ghost" state="hover" iconLeft={<CheckIcon />} iconRight={<CheckIcon />} />
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <ButtonTeste {...args} type={block.type} size="small" style="filled" state="disabled" iconLeft={<CheckIcon />} iconRight={<CheckIcon />} />
                  <ButtonTeste {...args} type={block.type} size="small" style="outlined" state="disabled" iconLeft={<CheckIcon />} iconRight={<CheckIcon />} />
                  <ButtonTeste {...args} type={block.type} size="small" style="ghost" state="disabled" iconLeft={<CheckIcon />} iconRight={<CheckIcon />} />
                </div>
              </>
            )}
          />
        </div>
      ))}
    </div>
  ),
}
