import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get('file') as File;
  const chapterId = formData.get('chapterId');

  if (!file) {
    return NextResponse.json({ error: 'No file' }, { status: 400 });
  }

  if (
    file.type !== 'application/pdf' &&
    !file.type.startsWith('video/')
  ) {
    return NextResponse.json({ error: 'Invalid file type' }, { status: 400 });
  }

  return NextResponse.json({
    name: file.name,
    chapterId,
  });
}
