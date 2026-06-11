type Props = {
  /** pass 1 = tentative lines, flat values; pass 2 = committed shadow shapes */
  pass: 1 | 2;
  className?: string;
  label: string;
};

/**
 * Placeholder line-art portrait standing in for real app screenshots.
 * Swap for actual drawings exported from the app when available — keep the
 * pass-1 / pass-2 pairing so the "second critique" sections stay honest.
 */
export default function PortraitSketch({ pass, className, label }: Props) {
  const stroke = pass === 1 ? "#d8ccb8" : "#eae0d1";
  const opacity = pass === 1 ? 0.62 : 0.9;
  const w = pass === 1 ? 2 : 2.3;

  return (
    <svg
      viewBox="0 0 300 360"
      role="img"
      aria-label={label}
      className={className}
    >
      <rect width="300" height="360" fill="#1a1411" />
      <g fill="none" stroke={stroke} strokeLinecap="round" opacity={opacity}>
        <path d="M118 70 C 140 50 182 54 199 80" strokeWidth={w} />
        <path d="M199 80 C 215 104 213 142 201 166" strokeWidth={w - 0.2} />
        <path d="M201 166 C 193 192 176 212 152 220" strokeWidth={w} />
        <path d="M152 220 C 134 224 119 213 110 196" strokeWidth={w - 0.2} />
        <path
          d="M110 196 C 100 175 99 138 105 110 C 107 92 111 80 118 70"
          strokeWidth={w - 0.4}
        />
        <path d="M126 122 C 138 116 148 116 154 120" strokeWidth={w} />
        <path d="M163 120 C 171 116 181 116 188 121" strokeWidth={w} />
        <path
          d="M157 128 C 155 146 152 158 148 167 C 153 172 161 172 165 168"
          strokeWidth={w - 0.4}
        />
        <path d="M139 192 C 150 198 164 197 173 190" strokeWidth={w} />
        <path d="M124 218 C 122 238 117 252 106 266" strokeWidth={w - 0.2} />
        <path d="M178 217 C 182 238 189 252 200 264" strokeWidth={w - 0.2} />
        <path d="M40 330 C 76 292 98 276 108 264" strokeWidth={w + 0.2} />
        <path d="M198 262 C 212 278 244 304 266 328" strokeWidth={w + 0.2} />

        {pass === 1 ? (
          /* timid, flat shading */
          <g strokeWidth={1.3} opacity={0.45}>
            <path d="M120 140 L 132 136" />
            <path d="M120 150 L 134 145" />
            <path d="M121 160 L 134 155" />
          </g>
        ) : (
          /* committed shadow side + dark under the jaw */
          <>
            <g strokeWidth={1.6} opacity={0.85}>
              <path d="M112 120 L 130 112" />
              <path d="M111 132 L 132 123" />
              <path d="M111 144 L 133 134" />
              <path d="M112 156 L 134 146" />
              <path d="M113 168 L 135 158" />
              <path d="M116 180 L 136 171" />
              <path d="M122 192 L 139 184" />
              <path d="M130 204 L 144 197" />
            </g>
            <g strokeWidth={1.6} opacity={0.85}>
              <path d="M138 226 L 168 214" />
              <path d="M136 236 L 172 222" />
              <path d="M138 246 L 176 231" />
              <path d="M144 256 L 180 241" />
            </g>
          </>
        )}
      </g>
    </svg>
  );
}
