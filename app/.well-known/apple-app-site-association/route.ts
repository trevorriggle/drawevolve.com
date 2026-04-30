import { NextResponse } from "next/server";

const aasa = {
  applinks: {
    details: [
      {
        appIDs: ["S2RDF2D29N.com.rigtech.drawevolve"],
        components: [
          {
            "/": "/auth/callback*",
            comment: "Magic link auth callback",
          },
        ],
      },
    ],
  },
};

export function GET() {
  return NextResponse.json(aasa, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
