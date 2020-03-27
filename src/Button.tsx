/** @jsx jsx */

import dotProp from 'dot-prop'
import mapObject from 'map-obj'
import { jsx, SxStyleProp, useThemeUI } from 'theme-ui'

type HtmlButtonProps = JSX.IntrinsicElements['button']

export interface ButtonProps extends HtmlButtonProps {
  variant?: string
  size?: 's' | 'm' | 'l'
  color?: string
}

const colorKey = '__color'

export function Button({
  variant = 'primary',
  size = 'm',
  color = 'primary',
  ...props
}: ButtonProps) {
  const { theme } = useThemeUI()
  const sx: SxStyleProp = mapObject(
    dotProp.get(theme || {}, `buttons.${variant}`, {}),
    (key: string, value: string) => [
      key?.toString(),
      ['bg', 'color', 'borderColor'].includes(key)
        ? value?.replace(colorKey, color)
        : value,
    ],
    { deep: true },
  )
  const sizeSx = dotProp.get(theme || {}, `buttons.sizes.${size}`, {})
  return (
    <button
      {...props}
      sx={{
        appearance: 'none',
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: 'inherit',
        textDecoration: 'none',
        fontSize: 'inherit',
        border: 0,
        borderRadius: 4,
        ...sx,
        ...sizeSx,
      }}
    />
  )
}
