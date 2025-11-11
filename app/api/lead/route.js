import { NextResponse } from 'next/server';
export async function POST(request){
  try{
    const body=await request.text();
    console.log('Lead:', body); // replace with CRM integration
    return NextResponse.json({ok:true});
  }catch(e){
    return new NextResponse('Bad Request', {status:400});
  }
}