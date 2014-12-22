/*************************************************************************
	> File Name: /home/mbmo/gitrepositories/myfiles/amarcodes/PutAllAttributes.java
	> Author:mbmo 
	> Mail: mominbin@163.com
	> Created Time: 2014年12月01日 星期一 11时30分52秒
 ************************************************************************/
/**
 *将获取的记录中所有的字段存放到json对象中
 * */
public class PutAllAttribute{
    public static putAllAttribute(JBOFactory jbo,String table,String sql,HashMap parameters){
    JSONObject result = new JSONObject();
    try{
        BizObjectManager m=jbo.getManager(table);
        BizObject o = m.createQuery(sql).setParameter("",xx).getSingleResult(false);
        if(o!=null){
            for(int i=0;i<o.getAttributeNumber();i++){
                result.put(o.getAttributes()[i].getName().toLowerCase(),o.getAttributes()[i].getValue());
            }
        }
    }catch(Exception e){
        throw new HandlerException("sqlerr.error");
    }
    }

}

